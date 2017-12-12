"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_service_1 = require("./redis-service");
const APP_ID = process.env.NODE_ENV !== 'production' ? 'wx78dfb7976e77c436' : 'wx1a679722114b6a84';
const APP_SECRET = process.env.NODE_ENV !== 'production' ? '1a55760202297f214c23a5dd9514646e' : '41a839d5d19753a8032b86a33c87b8e8';
// const APP_ID = 'wx78dfb7976e77c436'
// const APP_SECRET = '1a55760202297f214c23a5dd9514646e'
var WECHAT_TOKEN;
(function (WECHAT_TOKEN) {
    WECHAT_TOKEN["ACCESS_TOKEN"] = "access_token_by_code:";
    WECHAT_TOKEN["REFRESH_TOKEN"] = "refresh_token_by_code:";
    WECHAT_TOKEN["TOKEN_OBJECT"] = "token_object_by_code:";
})(WECHAT_TOKEN || (WECHAT_TOKEN = {}));
const OAuth = require('co-wechat-oauth');
const wechatClient = new OAuth(APP_ID, APP_SECRET);
exports.getTokenObjByCode = function (code) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!code)
            throw new Error('code can not be empty');
        let tokenObj = yield getTokenObjFromCache(code);
        tokenObj = yield verifyTokenObj(code, tokenObj);
        yield saveTokenObjToCache(code, tokenObj);
        return tokenObj;
    });
};
exports.getUserInfoByOpenId = function (openId) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield wechatClient.getUser(openId);
        return user;
    });
};
exports.getUserInfoByCode = function (code) {
    return __awaiter(this, void 0, void 0, function* () {
        // const tokenObj: WechatTokenObj = await getTokenObjByCode(code)
        // const user = await getUserInfoByOpenId(<string>tokenObj.openid)
        const user = yield wechatClient.getUserByCode(code)
            .catch(e => {
            console.log(e);
        });
        return user;
    });
};
function getTokenObjFromCache(code) {
    return __awaiter(this, void 0, void 0, function* () {
        const tokenObj = yield redis_service_1.default.get(WECHAT_TOKEN.TOKEN_OBJECT + code)
            .then((r) => JSON.parse(r));
        if (!tokenObj)
            return null;
        return tokenObj;
    });
}
function verifyTokenObj(code, tokenObj) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!tokenObj) {
            tokenObj = yield wechatClient.getAccessToken(code)
                .then((r) => {
                if (!r || !r.data)
                    throw new Error('invalid wechat api response');
                return r.data;
            })
                .catch((e) => {
                console.log(e);
            });
        }
        else {
            const verifyCode = yield wechatClient.verifyToken(tokenObj.openid, tokenObj.refresh_token)
                .then((r) => r.errcode);
            if (verifyCode !== 0)
                tokenObj = yield wechatClient.refreshAccessToken(tokenObj.openid, tokenObj.refresh_token)
                    .then((r) => r.data);
        }
        return tokenObj;
    });
}
// 用code 缓存tokenObj
function saveTokenObjToCache(code, tokenObj) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!code)
            throw new Error('saveTokenObj error code is empty');
        if (!tokenObj)
            throw new Error('saveTokenObj tokenObj error');
        yield redis_service_1.default.set(WECHAT_TOKEN.TOKEN_OBJECT + code, JSON.stringify(tokenObj))
            .catch((e) => {
            throw new Error(`redis set tokenObj error ${e.message}`);
        });
        yield redis_service_1.default.expire(WECHAT_TOKEN.TOKEN_OBJECT + code, 24 * 60 * 60)
            .catch((e) => {
            throw new Error(`redis expires_in tokenObj error ${e.message}`);
        });
    });
}
// 用code 缓存AccessToken
function saveAccessToken(code, tokenObj) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!code)
            throw new Error('saveUserAccessToken error code is empty');
        if (!tokenObj || !tokenObj.access_token)
            throw new Error('saveUserAccessToken tokenObj error');
        yield redis_service_1.default.set(WECHAT_TOKEN.ACCESS_TOKEN + code, tokenObj.access_token)
            .catch((e) => {
            throw new Error(`redis set accessToken error ${e.message}`);
        });
        yield redis_service_1.default.expire(WECHAT_TOKEN.ACCESS_TOKEN + code, tokenObj.expires_in - 200) // 保存2小时
            .catch((e) => {
            throw new Error(`redis expire accessToken error ${e.message}`);
        });
    });
}
// 用code 缓存RefreshToken
function saveRefreshToken(code, tokenObj) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!code)
            throw new Error('saveRefreshToken error code is empty');
        if (!tokenObj || !tokenObj.refresh_token)
            throw new Error('saveRefreshToken tokenObj error');
        yield redis_service_1.default.set(WECHAT_TOKEN.REFRESH_TOKEN + code, tokenObj.access_token)
            .catch((e) => {
            throw new Error(`redis set refreshToken error ${e.message}`);
        });
        yield redis_service_1.default.expire(WECHAT_TOKEN.REFRESH_TOKEN + code, 28 * 24 * 60 * 60) // 保存28天
            .catch((e) => {
            throw new Error(`redis expire refreshToken error ${e.message}`);
        });
    });
}
