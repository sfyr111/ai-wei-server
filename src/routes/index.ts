import * as express from 'express'
import * as User from '../controller/user/user'
import * as OAuth from 'wechat-oauth'
import { wechatDeploy, getAccessToken, getTicket, getSignature, getJssdkConfig } from '../services/wechat-service'

import { APP_ID, APP_SECRET } from '../config/wechat'
// 开发及生产环境
// const APP_ID = process.env.NODE_ENV !== 'production' ? 'wx78dfb7976e77c436' : 'wx1a679722114b6a84'
// const APP_SECRET = process.env.NODE_ENV !== 'production' ? '1a55760202297f214c23a5dd9514646e' : '41a839d5d19753a8032b86a33c87b8e8'
const redirectUrl = (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') ? 'http://mpsanqian.free.ngrok.cc' : 'http://www.ai-union.com'


// 用生产环境启动测试环境
// const APP_ID = 'wx78dfb7976e77c436'
// const APP_SECRET = '1a55760202297f214c23a5dd9514646e'
// const redirectUrl = 'http://www.ai-union.com'

const wechatClient = new OAuth(APP_ID, APP_SECRET)

const router = express.Router()

router.route('/')
  .get(function (req: any, res: any, next: any): void {
    // res.render('index', { title: 'Express' })
    res.render('index')
  })

router.route('/wechat')
  .get(function (req: any, res: any, next: any): void {
    const result = wechatDeploy(req.query)
    res.send(result)
  })

router.route('/wechat/accesstoken')
  .post(async function (req: any, res: any, next: any) {
    const token = await getAccessToken()
    res.send(token)
  })

router.route('/wechat/ticket')
  .post(async function (req: any, res: any, next: any) {
    const { token } = req.body
    const ticket = await getTicket(token)
    res.send(ticket)
  })

router.route('/wechat/signature')
  .get(async function (req: any, res: any, next: any) {
    const { url } = req.query
    const sign = await getSignature(url)
    res.json({
      sign,
      code: 0
    })
  })

router.route('/wechat/jssdk')
  .post(async function (req: any, res: any, next: any) {
    const { url } = req.body
    const config = await getJssdkConfig(url)
    res.json({
      config,
      code: 0
    })
  })

router.route('/wechat-redirect')
  .get(function (req: any, res: any, next: any): void {
    const clientUrl = wechatClient.getAuthorizeURL(redirectUrl, 'wechat-redirect', 'snsapi_base')
    res.redirect(clientUrl)
  })

router.route('/redirect/:url')
  .get(function (req: any, res: any, next: any): void {
    const url = `http://${req.params.url}`
    const clientUrl = wechatClient.getAuthorizeURL(url, 'wechat-redirect', 'snsapi_base')
    res.redirect(clientUrl)
  })

router.route('/wechat/login')
  .post(User.loginWithWechat)

router.route('/share/:page')
  .post(User.sharePageCountToRedis)

router.post('/test/:id', function (req: any, res: any, next: any): void {
  res.json({
    code: 0,
    data: req.params.id
  })
})

export default router
