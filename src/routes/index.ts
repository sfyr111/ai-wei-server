import * as express from 'express'
import * as User from '../controller/user/user'
import * as OAuth from 'wechat-oauth'
const APP_ID = 'wx78dfb7976e77c436'
const APP_SECRET = '1a55760202297f214c23a5dd9514646e'
const wechatClient = new OAuth(APP_ID, APP_SECRET)
const redirectUrl = 'http://mpsanqian.free.ngrok.cc'
// const redirectUrl = 'http://baidu.com'

const router = express.Router()

router.route('/')
  .get(function (req: any, res: any, next: any): void {
    // res.render('index', { title: 'Express' })
    res.render('index')
  })

router.route('/wechat-redirect')
  .get(function (req: any, res: any, next: any): void {
    const clientUrl = wechatClient.getAuthorizeURL(redirectUrl, 'wechat-redirect', 'snsapi_base')
    res.redirect(clientUrl)
  })

router.route('/wechat/login')
  .post(User.loginWithWechat)

router.post('/test/:id', function (req: any, res: any, next: any): void {
  res.json({
    code: 0,
    data: req.params.id
  })
})

export default router
