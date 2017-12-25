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
var redis_service_1 = require("./redis-service");
var wechat_1 = require("../config/wechat");
var WechatAPI = require("co-wechat-api");
var sha1 = require("sha1");
var axios_1 = require("axios");
// const APP_ID = process.env.NODE_ENV !== 'production' ? 'wx78dfb7976e77c436' : 'wx1a679722114b6a84'
// const APP_SECRET = process.env.NODE_ENV !== 'production' ? '1a55760202297f214c23a5dd9514646e' : '41a839d5d19753a8032b86a33c87b8e8'
// const APP_ID = 'wx78dfb7976e77c436'
// const APP_SECRET = '1a55760202297f214c23a5dd9514646e'
var ACCESS_TOKEN = 'access_token_by_aiwei';
var JS_TICKET = 'js_ticket_by_token';
var WECHAT_TOKEN;
(function (WECHAT_TOKEN) {
    WECHAT_TOKEN["ACCESS_TOKEN"] = "access_token_by_code:";
    WECHAT_TOKEN["REFRESH_TOKEN"] = "refresh_token_by_code:";
    WECHAT_TOKEN["TOKEN_OBJECT"] = "token_object_by_code:";
})(WECHAT_TOKEN || (WECHAT_TOKEN = {}));
var wechatApi = new WechatAPI(wechat_1.APP_ID, wechat_1.APP_SECRET);
var OAuth = require('co-wechat-oauth');
var wechatClient = new OAuth(wechat_1.APP_ID, wechat_1.APP_SECRET);
exports.getTokenObjByCode = function (code) {
    return __awaiter(this, void 0, void 0, function () {
        var tokenObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!code)
                        throw new Error('code can not be empty');
                    return [4 /*yield*/, getTokenObjFromCache(code)];
                case 1:
                    tokenObj = _a.sent();
                    return [4 /*yield*/, verifyTokenObj(code, tokenObj)];
                case 2:
                    tokenObj = _a.sent();
                    return [4 /*yield*/, saveTokenObjToCache(code, tokenObj)];
                case 3:
                    _a.sent();
                    return [2 /*return*/, tokenObj];
            }
        });
    });
};
exports.getUserInfoByOpenId = function (openId) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, wechatClient.getUser(openId)];
                case 1:
                    user = _a.sent();
                    return [2 /*return*/, user];
            }
        });
    });
};
exports.getUserInfoByCode = function (code) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, wechatClient.getUserByCode(code)["catch"](function (e) {
                        console.log(e);
                    })];
                case 1:
                    user = _a.sent();
                    return [2 /*return*/, user];
            }
        });
    });
};
exports.wechatDeploy = function (data) {
    var signature = data.signature, nonce = data.nonce, timestamp = data.timestamp, echostr = data.echostr;
    var str = [wechat_1.WECHAT_VERIFICATION_TOKEN, timestamp, nonce].sort().join('');
    var shaStr = sha1(str);
    if (shaStr === signature)
        return echostr;
    else
        return 'failed';
};
// 获取服务器accese_token
exports.getAccessToken = function () {
    return __awaiter(this, void 0, void 0, function () {
        var tokenObj, token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" + wechat_1.APP_ID + "&secret=" + wechat_1.APP_SECRET + "\n").then(function (data) { return data.data; })];
                case 1:
                    tokenObj = _a.sent();
                    return [4 /*yield*/, redis_service_1["default"].set(ACCESS_TOKEN, tokenObj.access_token)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, redis_service_1["default"].expire(ACCESS_TOKEN, 7000)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, redis_service_1["default"].get(ACCESS_TOKEN)];
                case 4:
                    token = _a.sent();
                    return [2 /*return*/, token];
            }
        });
    });
};
// 获取js_ticket
exports.getTicket = function (token) {
    return __awaiter(this, void 0, void 0, function () {
        var ticket, ticketObj, ticket_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, redis_service_1["default"].get(JS_TICKET)];
                case 1:
                    ticket = _a.sent();
                    if (!!token) return [3 /*break*/, 3];
                    return [4 /*yield*/, exports.getAccessToken()];
                case 2:
                    token = _a.sent();
                    _a.label = 3;
                case 3:
                    if (!!ticket) return [3 /*break*/, 8];
                    return [4 /*yield*/, axios_1["default"].get("https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=" + token + "&type=jsapi\n").then(function (data) { return data.data; })];
                case 4:
                    ticketObj = _a.sent();
                    return [4 /*yield*/, redis_service_1["default"].set(JS_TICKET, ticketObj.ticket)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, redis_service_1["default"].expire(JS_TICKET, 7000)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, redis_service_1["default"].get(JS_TICKET)];
                case 7:
                    ticket_1 = _a.sent();
                    return [2 /*return*/, ticket_1];
                case 8: return [2 /*return*/, ticket];
            }
        });
    });
};
exports.getSignature = function (url) {
    return __awaiter(this, void 0, void 0, function () {
        var ticket, params;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!url)
                        throw 'url is not found';
                    url = decodeURIComponent(url);
                    return [4 /*yield*/, exports.getTicket()];
                case 1:
                    ticket = _a.sent();
                    params = sign(ticket, url);
                    params.appId = wechat_1.APP_ID;
                    return [2 /*return*/, params];
            }
        });
    });
};
exports.getJssdkConfig = function (url) {
    return __awaiter(this, void 0, void 0, function () {
        var params, config;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    params = {
                        url: url,
                        jsApiList: wechat_1.jsApiList,
                        debug: false
                    };
                    return [4 /*yield*/, wechatApi.getJsConfig(params)];
                case 1:
                    config = _a.sent();
                    return [2 /*return*/, config];
            }
        });
    });
};
function getTokenObjFromCache(code) {
    return __awaiter(this, void 0, void 0, function () {
        var tokenObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, redis_service_1["default"].get(WECHAT_TOKEN.TOKEN_OBJECT + code)
                        .then(function (r) { return JSON.parse(r); })];
                case 1:
                    tokenObj = _a.sent();
                    if (!tokenObj)
                        return [2 /*return*/, null];
                    return [2 /*return*/, tokenObj];
            }
        });
    });
}
function verifyTokenObj(code, tokenObj) {
    return __awaiter(this, void 0, void 0, function () {
        var verifyCode;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!tokenObj) return [3 /*break*/, 2];
                    return [4 /*yield*/, wechatClient.getAccessToken(code)
                            .then(function (r) {
                            if (!r || !r.data)
                                throw new Error('invalid wechat api response');
                            return r.data;
                        })["catch"](function (e) {
                            console.log(e);
                        })];
                case 1:
                    tokenObj = _a.sent();
                    return [3 /*break*/, 5];
                case 2: return [4 /*yield*/, wechatClient.verifyToken(tokenObj.openid, tokenObj.refresh_token)
                        .then(function (r) { return r.errcode; })];
                case 3:
                    verifyCode = _a.sent();
                    if (!(verifyCode !== 0)) return [3 /*break*/, 5];
                    return [4 /*yield*/, wechatClient.refreshAccessToken(tokenObj.openid, tokenObj.refresh_token)
                            .then(function (r) { return r.data; })];
                case 4:
                    tokenObj = _a.sent();
                    _a.label = 5;
                case 5: return [2 /*return*/, tokenObj];
            }
        });
    });
}
// 用code 缓存tokenObj
function saveTokenObjToCache(code, tokenObj) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!code)
                        throw new Error('saveTokenObj error code is empty');
                    if (!tokenObj)
                        throw new Error('saveTokenObj tokenObj error');
                    return [4 /*yield*/, redis_service_1["default"].set(WECHAT_TOKEN.TOKEN_OBJECT + code, JSON.stringify(tokenObj))["catch"](function (e) {
                            throw new Error("redis set tokenObj error " + e.message);
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, redis_service_1["default"].expire(WECHAT_TOKEN.TOKEN_OBJECT + code, 24 * 60 * 60)["catch"](function (e) {
                            throw new Error("redis expires_in tokenObj error " + e.message);
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// 用code 缓存AccessToken
function saveAccessToken(code, tokenObj) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!code)
                        throw new Error('saveUserAccessToken error code is empty');
                    if (!tokenObj || !tokenObj.access_token)
                        throw new Error('saveUserAccessToken tokenObj error');
                    return [4 /*yield*/, redis_service_1["default"].set(WECHAT_TOKEN.ACCESS_TOKEN + code, tokenObj.access_token)["catch"](function (e) {
                            throw new Error("redis set accessToken error " + e.message);
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, redis_service_1["default"].expire(WECHAT_TOKEN.ACCESS_TOKEN + code, tokenObj.expires_in - 200) // 保存2小时
                        ["catch"](function (e) {
                            throw new Error("redis expire accessToken error " + e.message);
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// 用code 缓存RefreshToken
function saveRefreshToken(code, tokenObj) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!code)
                        throw new Error('saveRefreshToken error code is empty');
                    if (!tokenObj || !tokenObj.refresh_token)
                        throw new Error('saveRefreshToken tokenObj error');
                    return [4 /*yield*/, redis_service_1["default"].set(WECHAT_TOKEN.REFRESH_TOKEN + code, tokenObj.access_token)["catch"](function (e) {
                            throw new Error("redis set refreshToken error " + e.message);
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, redis_service_1["default"].expire(WECHAT_TOKEN.REFRESH_TOKEN + code, 28 * 24 * 60 * 60) // 保存28天
                        ["catch"](function (e) {
                            throw new Error("redis expire refreshToken error " + e.message);
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function createNonce() {
    return Math.random().toString(36).substr(2, 15);
}
function createTimestamp() {
    return (Date.now() / 1000) >> 0;
}
function raw(args) {
    var keys = Object.keys(args);
    var newArgs = {};
    var str = '';
    keys = keys.sort();
    keys.forEach(function (key) {
        newArgs[key.toLowerCase()] = args[key];
    });
    for (var k in newArgs) {
        str += '&' + k + '=' + newArgs[k];
    }
    return str.substr(1);
}
function signIt(noncestr, ticket, timestamp, url) {
    var ret = {
        url: url,
        timestamp: timestamp,
        nonceStr: noncestr,
        jsapi_ticket: ticket
    };
    var string = raw(ret);
    var sha = sha1(string);
    return sha;
}
function sign(ticket, url) {
    var noncestr = createNonce();
    var timestamp = createTimestamp();
    var signature = signIt(noncestr, ticket, timestamp, url);
    return {
        noncestr: noncestr,
        timestamp: timestamp,
        signature: signature
    };
}
