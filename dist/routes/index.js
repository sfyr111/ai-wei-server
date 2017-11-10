"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const User = require("../controller/user/user");
const OAuth = require("wechat-oauth");
const APP_ID = 'wx78dfb7976e77c436';
const APP_SECRET = '1a55760202297f214c23a5dd9514646e';
const wechatClient = new OAuth(APP_ID, APP_SECRET);
const redirectUrl = 'http://mpsanqian.free.ngrok.cc';
// const redirectUrl = 'http://baidu.com'
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
router.route('/wechat/login')
    .post(User.loginWithWechat);
router.post('/test/:id', function (req, res, next) {
    res.json({
        code: 0,
        data: req.params.id
    });
});
exports.default = router;
