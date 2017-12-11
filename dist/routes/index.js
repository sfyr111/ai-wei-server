"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const User = require("../controller/user/user");
const OAuth = require("wechat-oauth");
const APP_ID = process.env.NODE_ENV !== 'production' ? 'wx78dfb7976e77c436' : 'wx1a679722114b6a84';
const APP_SECRET = process.env.NODE_ENV !== 'production' ? '1a55760202297f214c23a5dd9514646e' : '41a839d5d19753a8032b86a33c87b8e8';
const wechatClient = new OAuth(APP_ID, APP_SECRET);
const redirectUrl = process.env.NODE_ENV !== 'production' ? 'http://mpsanqian.free.ngrok.cc' : 'http://www.ai-union.com';
const router = express.Router();
router.route('/')
    .get(function (req, res, next) {
    // res.render('index', { title: 'Express' })
    res.render('index');
});
router.route('/wechat-redirect')
    .get(function (req, res, next) {
    const clientUrl = wechatClient.getAuthorizeURL(redirectUrl, 'wechat-redirect', 'snsapi_base');
    res.redirect(clientUrl);
});
router.route('/redirect/:url')
    .get(function (req, res, next) {
    const url = `http://${req.params.url}`;
    const clientUrl = wechatClient.getAuthorizeURL(url, 'wechat-redirect', 'snsapi_base');
    res.redirect(clientUrl);
});
router.route('/wechat/login')
    .post(User.loginWithWechat);
router.post('/test/:id', function (req, res, next) {
    res.json({
        code: 0,
        data: req.params.id
    });
});
exports.default = router;
