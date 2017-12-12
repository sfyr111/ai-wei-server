import * as express from 'express'
import * as User from '../controller/user/user'
import * as OAuth from 'wechat-oauth'

const APP_ID = process.env.NODE_ENV !== 'production' ? 'wx78dfb7976e77c436' : 'wx1a679722114b6a84'
const APP_SECRET = process.env.NODE_ENV !== 'production' ? '1a55760202297f214c23a5dd9514646e' : '41a839d5d19753a8032b86a33c87b8e8'
const wechatClient = new OAuth(APP_ID, APP_SECRET)
// const redirectUrl = process.env.NODE_ENV !== 'production' ? 'http://mpsanqian.free.ngrok.cc' : 'http://www.ai-union.com'
const redirectUrl = 'http://www.ai-union.com'

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

router.route('/redirect/:url')
  .get(function (req: any, res: any, next: any): void {
    const url = `http://${req.params.url}`
    const clientUrl = wechatClient.getAuthorizeURL(url, 'wechat-redirect', 'snsapi_base')
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
