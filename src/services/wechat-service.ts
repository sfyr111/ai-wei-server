import redis from './redis-service'
import { WechatTokenObj } from '../type'

const APP_ID = process.env.NODE_ENV !== 'production' ? 'wx78dfb7976e77c436' : 'wx1a679722114b6a84'
const APP_SECRET = process.env.NODE_ENV !== 'production' ? '1a55760202297f214c23a5dd9514646e' : '41a839d5d19753a8032b86a33c87b8e8'

enum WECHAT_TOKEN {
  ACCESS_TOKEN = 'access_token_by_code:',
  REFRESH_TOKEN = 'refresh_token_by_code:',
  TOKEN_OBJECT = 'token_object_by_code:',
}

const OAuth = require('co-wechat-oauth')
const wechatClient = new OAuth(APP_ID, APP_SECRET)

export const getTokenObjByCode = async function (code: string): Promise<WechatTokenObj> {
  if (!code) throw new Error('code can not be empty')

  let tokenObj: null | WechatTokenObj = await getTokenObjFromCache(code)

  tokenObj = await verifyTokenObj(code, tokenObj)

  await saveTokenObjToCache(code, tokenObj)

  return tokenObj
}

export const getUserInfoByOpenId = async function (openId: string): Promise<object> {
  const user = await wechatClient.getUser(openId)
  return user
}

export const getUserInfoByCode = async function (code: string): Promise<object> {
  // const tokenObj: WechatTokenObj = await getTokenObjByCode(code)

  // const user = await getUserInfoByOpenId(<string>tokenObj.openid)
  const user = await wechatClient.getUserByCode(code)
    .catch(e => {
      console.log(e)
    })
  return user
}

async function getTokenObjFromCache (code: string): Promise<null | WechatTokenObj> {
  const tokenObj: WechatTokenObj = await redis.get(WECHAT_TOKEN.TOKEN_OBJECT + code)
    .then((r: string): Promise<object> => JSON.parse(r))

  if (!tokenObj) return null
  return tokenObj
}

async function verifyTokenObj (code: string, tokenObj: null | WechatTokenObj): Promise<WechatTokenObj> {
  if (!tokenObj) {
    tokenObj = await wechatClient.getAccessToken(code)
      .then((r: any) => {
        if (!r || !r.data) throw new Error('invalid wechat api response')
        return r.data
      })
      .catch((e: any) => {
        console.log(e)
      })
  } else {
    const verifyCode: number = await wechatClient.verifyToken(tokenObj.openid, tokenObj.refresh_token)
      .then((r: any) => r.errcode)
    if (verifyCode !== 0) tokenObj = await wechatClient.refreshAccessToken(tokenObj.openid, tokenObj.refresh_token)
      .then((r: any): Promise<WechatTokenObj> => r.data)
  }
  return tokenObj
}

// 用code 缓存tokenObj
async function saveTokenObjToCache (code: string, tokenObj: WechatTokenObj): Promise<void> {
  if (!code) throw new Error('saveTokenObj error code is empty')
  if (!tokenObj) throw new Error('saveTokenObj tokenObj error')

  await redis.set(WECHAT_TOKEN.TOKEN_OBJECT + code, JSON.stringify(tokenObj))
    .catch((e: any): never => {
      throw new Error(`redis set tokenObj error ${e.message}`)
    })

  await redis.expire(WECHAT_TOKEN.TOKEN_OBJECT + code, 24 * 60 * 60)
    .catch((e: any): never => {
      throw new Error(`redis expires_in tokenObj error ${e.message}`)
    })
}

// 用code 缓存AccessToken
async function saveAccessToken (code: string, tokenObj: WechatTokenObj): Promise<void> {
  if (!code) throw new Error('saveUserAccessToken error code is empty')
  if (!tokenObj || !tokenObj.access_token) throw new Error('saveUserAccessToken tokenObj error')

  await redis.set(WECHAT_TOKEN.ACCESS_TOKEN + code, tokenObj.access_token)
    .catch((e: any) => {
      throw new Error(`redis set accessToken error ${e.message}`)
    })

  await redis.expire(WECHAT_TOKEN.ACCESS_TOKEN + code, <number>tokenObj.expires_in - 200) // 保存2小时
    .catch((e: any) => {
      throw new Error(`redis expire accessToken error ${e.message}`)
    })
}

// 用code 缓存RefreshToken
async function saveRefreshToken (code: string, tokenObj: WechatTokenObj): Promise<void> {
  if (!code) throw new Error('saveRefreshToken error code is empty')
  if (!tokenObj || !tokenObj.refresh_token) throw new Error('saveRefreshToken tokenObj error')

  await redis.set(WECHAT_TOKEN.REFRESH_TOKEN + code, tokenObj.access_token)
    .catch((e: any) => {
      throw new Error(`redis set refreshToken error ${e.message}`)
    })

  await redis.expire(WECHAT_TOKEN.REFRESH_TOKEN + code, 28 * 24 * 60 * 60)// 保存28天
    .catch((e: any) => {
      throw new Error(`redis expire refreshToken error ${e.message}`)
    })
}