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
const user_1 = require("../../models/user/user");
const courseColumn_1 = require("../../models/courseColumn/courseColumn");
const WechatService = require("../../services/wechat-service");
const JWT = require("jsonwebtoken");
const cipher_1 = require("../../config/cipher");
const DEFAULT_PROJECTION = { __v: 0 };
exports.getUsers = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { page = 0, pageSize = 10 } = req.body;
        const flow = user_1.default.find({});
        flow.select(DEFAULT_PROJECTION);
        flow.skip(page * pageSize);
        flow.limit(pageSize);
        const users = yield flow
            .catch((e) => {
            console.log(e);
            throw new Error('getUsers error');
        });
        res.json({
            code: 0,
            users
        });
    });
};
exports.getUserById = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const user = yield user_1.default.findOne({ _id: id })
            .select(DEFAULT_PROJECTION)
            .catch((e) => {
            throw new Error('getUserById error');
        });
        res.json({
            code: 0,
            user
        });
    });
};
exports.getUserByOpenId = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { userId } = req.params;
        const user = yield user_1.default.findOne({ openId: userId })
            .select(DEFAULT_PROJECTION)
            .catch((e) => {
            throw new Error('getUserById error');
        });
        res.json({
            code: 0,
            user
        });
    });
};
const testUser = {
    "_id": "000000000000000000000000",
    "sex": "1",
    "city": "Nanjing",
    "openId": "12345678",
    "name": "测试用户1",
    "country": "China",
    "province": "Jiangsu",
    "avatar": "http://w3schools.bootcss.com/images/colorpicker.gif"
};
// a day 24 * 60 * 60 * 1000
exports.loginWithWechat = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { code } = req.body;
        // if (code === 'test') {
        if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
            if (req.session.user) {
                res.json({
                    code: 0,
                    token: JWT.sign({
                        _id: req.session.user._id,
                        iat: Date.now(),
                        expire: Date.now() + 24 * 60 * 60 * 1000
                    }, cipher_1.Cipher.JWT_SECRET),
                    user: req.session.user,
                    sess: 'sess'
                });
            }
            req.session.user = testUser;
            res.json({
                code: 0,
                token: JWT.sign({
                    _id: req.session.user._id,
                    iat: Date.now(),
                    expire: Date.now() + 24 * 60 * 60 * 1000
                }, cipher_1.Cipher.JWT_SECRET),
                user: testUser
            });
        }
        else {
            if (req.session.user) {
                const token = JWT.sign({ _id: req.session.user._id, iat: Date.now(), expire: Date.now() + 24 * 60 * 60 * 1000 }, cipher_1.Cipher.JWT_SECRET);
                res.json({
                    code: 0,
                    user: req.session.user,
                    token,
                    sess: 'sess'
                });
            }
            const userOfWechat = yield WechatService.getUserInfoByCode(code)
                .catch((e) => {
                throw new Error('userOfWechat error');
            });
            // 存用户
            const user = yield foundOrCreatedUser(userOfWechat);
            const token = JWT.sign({ _id: user._id, iat: Date.now(), expire: Date.now() + 24 * 60 * 60 * 1000 }, cipher_1.Cipher.JWT_SECRET);
            req.session.user = user;
            res.json({
                code: 0,
                user,
                token
            });
        }
    });
};
exports.getFavoriteColumns = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const favoriteColumnIds = yield user_1.default.findOne({ openId: req.params.userId }).then((data) => data.favoriteColumnId);
        const columns = yield _handleFavAndHisColumns(favoriteColumnIds)
            .catch(e => {
            console.log(e);
            throw new Error('getFavoriteColumns Error');
        });
        res.json({
            code: 0,
            columns
        });
    });
};
exports.addFavoriteColumn = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const columns = yield user_1.default.findOneAndUpdate({ openId: req.params.userId }, { $addToSet: { favoriteColumnId: req.params.id } }, { new: true });
        res.json({
            code: 0,
            columns
        });
    });
};
exports.deleteFavoriteColumn = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const columns = yield user_1.default.findOneAndUpdate({ openId: req.params.userId }, { $pull: { favoriteColumnId: req.params.id } }, { new: true });
        res.json({
            code: 0,
            columns
        });
    });
};
exports.getHistoryColumns = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const historyColumnIds = yield user_1.default.findOne({ openId: req.params.userId }).then((data) => [...new Set(data.historyColumnId)]);
        const columns = yield _handleFavAndHisColumns(historyColumnIds)
            .catch(e => {
            console.log(e);
            throw new Error('getHistoryColumns Error');
        });
        res.json({
            code: 0,
            columns
        });
    });
};
exports.addHistoryColumn = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const columns = yield user_1.default.findOneAndUpdate({ openId: req.params.userId }, { $push: { historyColumnId: req.params.id } }, { new: true });
        res.json({
            code: 0,
            columns
        });
    });
};
exports.deleteHistoryColumn = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const columns = yield user_1.default.findOneAndUpdate({ openId: req.params.userId }, { $pull: { historyColumnId: req.params.id } }, { new: true });
        res.json({
            code: 0,
            columns
        });
    });
};
function foundOrCreatedUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        // 找到并更新
        const found = yield foundAndUpdateUser(user);
        if (found)
            return found;
        const created = yield createNewUser(user);
        return created;
    });
}
function foundAndUpdateUser(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const update = {
            sex: params.sex,
            city: params.city,
            name: params.nickname,
            country: params.country,
            province: params.province,
            avatar: params.headimgurl,
        };
        const found = yield user_1.default.findOneAndUpdate({ openId: params.openid }, update, { new: true, fields: { __v: 0 } })
            .catch((e) => {
            console.log(e);
            throw new Error('foundAndUpdateUser error');
        });
        return found;
    });
}
function createNewUser(params) {
    return __awaiter(this, void 0, void 0, function* () {
        // 只有微信用户一种情况
        const user = new user_1.default({
            sex: params.sex,
            city: params.city,
            openId: params.openid,
            name: params.nickname,
            country: params.country,
            province: params.province,
            avatar: params.headimgurl,
        });
        const created = yield user.save()
            .catch((e) => {
            console.log(e);
            throw new Error('createNewUser error');
        });
        return created;
    });
}
function _sortColumnByIdsOrder(ids, columns) {
    const sortColumns = ids.map((item, index) => {
        const idx = ids.indexOf(columns[index]._id.toString());
        return columns[idx];
    });
    return sortColumns;
}
function _filterFavoriteColumnIdsByColumns(ids) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield courseColumn_1.default.find({}, { _id: 1 }).then(list => {
            return ids.filter(el => list.find(val => val._id.toString() === el));
        });
    });
}
function _handleFavAndHisColumns(columnIds) {
    return __awaiter(this, void 0, void 0, function* () {
        const ids = yield _filterFavoriteColumnIdsByColumns(columnIds);
        return yield courseColumn_1.default.find({ '_id': { $in: ids }, isRelease: true })
            .then((columns) => {
            return _sortColumnByIdsOrder(ids, columns).reverse();
        });
    });
}
