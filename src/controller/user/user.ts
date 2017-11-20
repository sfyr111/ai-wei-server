import UserModel from '../../models/user/user'
import CourseColumn from '../../models/courseColumn/courseColumn'
import * as WechatService from '../../services/wechat-service'

import * as JWT from 'jsonwebtoken'
import { Cipher } from '../../config/cipher'

import { WechatUser } from '../../type'

const DEFAULT_PROJECTION = { __v: 0 }

export const getUsers = async function (req: any, res: any, next: any): Promise<any> {
  const { page = 0, pageSize = 10 } = req.body
  const flow = UserModel.find({})
  flow.select(DEFAULT_PROJECTION)
  flow.skip(page * pageSize)
  flow.limit(pageSize)

  const users = await flow
    .catch((e: any): void => {
      console.log(e)
      throw new Error('getUsers error')
    })
  res.json({
    code: 0,
    users
  })
}

export const getUserById = async function (req: any, res: any, next: any): Promise<any> {
  const { id } = req.params
  const user = await UserModel.findOne({ _id: id })
    .select(DEFAULT_PROJECTION)
    .catch((e: any): void => {
      throw new Error('getUserById error')
    })
  res.json({
    code: 0,
    user
  })
}

export const getUserByOpenId = async function (req: any, res: any, next: any): Promise<any> {
  const { userId } = req.params
  const user = await UserModel.findOne({ openId: userId })
    .select(DEFAULT_PROJECTION)
    .catch((e: any): void => {
      throw new Error('getUserById error')
    })
  res.json({
    code: 0,
    user
  })
}

// a day 24 * 60 * 60 * 1000
export const loginWithWechat = async function (req: any, res: any, next: any): Promise<any> {
  const { code } = req.body
  // if (code === 'test') {
  if (process.env.NODE_ENV !== 'production') {
    res.json({
      code: 0,
      token: JWT.sign({
        _id: '000000000000000000000000',
        iat: Date.now(),
        expire: Date.now() + 24 * 60 * 60 * 1000
      }, Cipher.JWT_SECRET),
      user: {
        "_id": "000000000000000000000000",
        "sex": "1",
        "city": "Nanjing",
        "openId": "12345678",
        "name": "测试用户1",
        "country": "China",
        "province": "Jiangsu",
        "avatar": "http://w3schools.bootcss.com/images/colorpicker.gif"
      }
    })
  } else {
    const userOfWechat = await WechatService.getUserInfoByCode(code)
      .catch((e: any) => {
        throw new Error('userOfWechat error')
      })
    // 存用户
    const user = await foundOrCreatedUser(userOfWechat)

    const token = JWT.sign({ _id: user._id, iat: Date.now(), expire: Date.now() + 24 * 60 * 60 * 1000 }, Cipher.JWT_SECRET)

    res.json({
      code: 0,
      user,
      token
    })
  }
}

export const getFavoriteColumns = async function (req: any, res: any, next: any): Promise<any> {
  const favoriteColumnIds: string[] = await UserModel.findOne({ openId: req.params.userId }).then((data: any): string[] => data.favoriteColumnId)

  const columns: object[] = await _handleFavAndHisColumns(favoriteColumnIds)
    .catch(e => {
      console.log(e)
      throw new Error ('getFavoriteColumns Error')
    })

  res.json({
    code: 0,
    columns
  })
}

export const addFavoriteColumn = async function (req: any, res: any, next: any): Promise<any> {
  const columns = await UserModel.findOneAndUpdate(
    { openId: req.params.userId },
    { $addToSet: { favoriteColumnId: req.params.id}},
    { new: true })
  res.json({
    code: 0,
    columns
  })
}

export const deleteFavoriteColumn = async function (req: any, res: any, next: any): Promise<any> {
  const columns = await UserModel.findOneAndUpdate(
    { openId: req.params.userId },
    { $pull: { favoriteColumnId: req.params.id}},
    { new: true })
  res.json({
    code: 0,
    columns
  })
}

export const getHistoryColumns = async function (req: any, res: any, next: any): Promise<any> {
  const historyColumnIds: string[] = await UserModel.findOne({ openId: req.params.userId }).then((data: any): string[] => [...new Set(<string[]>data.historyColumnId)])

  const columns: object[] = await _handleFavAndHisColumns(historyColumnIds)
    .catch(e => {
      console.log(e)
      throw new Error ('getHistoryColumns Error')
    })

  res.json({
    code: 0,
    columns
  })
}

export const addHistoryColumn = async function (req: any, res: any, next: any): Promise<any> {
  const columns = await UserModel.findOneAndUpdate(
    { openId: req.params.userId },
    { $push: { historyColumnId: req.params.id}},
    { new: true })
  res.json({
    code: 0,
    columns
  })
}

export const deleteHistoryColumn = async function (req: any, res: any, next: any): Promise<any> {
  const columns = await UserModel.findOneAndUpdate(
    { openId: req.params.userId },
    { $pull: { historyColumnId: req.params.id}},
    { new: true })
  res.json({
    code: 0,
    columns
  })
}

async function foundOrCreatedUser (user: any): Promise<any> {
    // 找到并更新
    const found = await foundAndUpdateUser(user)
    if (found) return found

    const created = await createNewUser(user)
    return created
}

async function foundAndUpdateUser (params: WechatUser): Promise<any> {
  const update = {
    sex: params.sex,
    city: params.city,
    name: params.nickname,
    country: params.country,
    province: params.province,
    avatar: params.headimgurl,
  }
  const found = await UserModel.findOneAndUpdate({ openId: params.openid }, update, { new: true, fields: { __v: 0 } })
    .catch((e: any): void => {
      console.log(e)
      throw new Error('foundAndUpdateUser error')
    })
  return found
}

async function createNewUser (params: WechatUser): Promise<any> {
  // 只有微信用户一种情况
  const user = new UserModel({
    sex: params.sex,
    city: params.city,
    openId: params.openid,
    name: params.nickname,
    country: params.country,
    province: params.province,
    avatar: params.headimgurl,
  })
  const created = await user.save()
    .catch((e: any): void => {
      console.log(e)
      throw new Error('createNewUser error')
    })
  return created
}

function _sortColumnByIdsOrder (ids: string[], columns: object[]): object[] {
  const sortColumns = ids.map((item, index) => {
    const idx = ids.indexOf(columns[index]._id.toString())
    return columns[idx]
  })
  return sortColumns
}

async function _filterFavoriteColumnIdsByColumns(ids: string[]): Promise<string[]> {
  return await CourseColumn.find({}, { _id: 1 }).then(list => {
    return ids.filter(el => list.find(val => val._id.toString() === el))
  })
}

async function _handleFavAndHisColumns (columnIds: string[]): Promise<object[]> {
  const ids: string[] = await _filterFavoriteColumnIdsByColumns(columnIds)
  return await CourseColumn.find({ '_id': { $in: ids } })
    .then((columns: object[]): Array<object>  => {
      return _sortColumnByIdsOrder(ids, <object[]>columns).reverse()
    })
}