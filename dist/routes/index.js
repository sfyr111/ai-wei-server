"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express = require("express");
var User = require("../controller/user/user");
var OAuth = require("wechat-oauth");
var wechat_service_1 = require("../services/wechat-service");
var wechat_1 = require("../config/wechat");
// 开发及生产环境
// const APP_ID = process.env.NODE_ENV !== 'production' ? 'wx78dfb7976e77c436' : 'wx1a679722114b6a84'
// const APP_SECRET = process.env.NODE_ENV !== 'production' ? '1a55760202297f214c23a5dd9514646e' : '41a839d5d19753a8032b86a33c87b8e8'
var redirectUrl = (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') ? 'http://mpsanqian.free.ngrok.cc' : 'http://www.ai-union.com';
// 用生产环境启动测试环境
// const APP_ID = 'wx78dfb7976e77c436'
// const APP_SECRET = '1a55760202297f214c23a5dd9514646e'
// const redirectUrl = 'http://www.ai-union.com'
var wechatClient = new OAuth(wechat_1.APP_ID, wechat_1.APP_SECRET);
var router = express.Router();
router.route('/')
    .get(function (req, res, next) {
    // res.render('index', { title: 'Express' })
    res.render('index');
});
router.route('/wechat')
    .get(function (req, res, next) {
    var result = wechat_service_1.wechatDeploy(req.query);
    res.send(result);
});
router.route('/wechat/accesstoken')
    .post(function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, wechat_service_1.getAccessToken()];
                case 1:
                    token = _a.sent();
                    res.send(token);
                    return [2 /*return*/];
            }
        });
    });
});
router.route('/wechat/ticket')
    .post(function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var token, ticket;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = req.body.token;
                    return [4 /*yield*/, wechat_service_1.getTicket(token)];
                case 1:
                    ticket = _a.sent();
                    res.send(ticket);
                    return [2 /*return*/];
            }
        });
    });
});
router.route('/wechat/signature')
    .get(function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var url, sign;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = req.query.url;
                    return [4 /*yield*/, wechat_service_1.getSignature(url)];
                case 1:
                    sign = _a.sent();
                    res.json({
                        sign: sign,
                        code: 0
                    });
                    return [2 /*return*/];
            }
        });
    });
});
router.route('/wechat/jssdk')
    .post(function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var url, config;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = req.body.url;
                    return [4 /*yield*/, wechat_service_1.getJssdkConfig(url)];
                case 1:
                    config = _a.sent();
                    res.json({
                        config: config,
                        code: 0
                    });
                    return [2 /*return*/];
            }
        });
    });
});
router.route('/wechat-redirect')
    .get(function (req, res, next) {
    var clientUrl = wechatClient.getAuthorizeURL(redirectUrl, 'wechat-redirect', 'snsapi_base');
    res.redirect(clientUrl);
});
router.route('/redirect/:url')
    .get(function (req, res, next) {
    var url = "http://" + req.params.url;
    var clientUrl = wechatClient.getAuthorizeURL(url, 'wechat-redirect', 'snsapi_base');
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
exports["default"] = router;
