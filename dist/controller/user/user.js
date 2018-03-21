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
var user_1 = require("../../models/user/user");
var courseColumn_1 = require("../../models/courseColumn/courseColumn");
var redis_service_1 = require("../../services/redis-service");
var WechatService = require("../../services/wechat-service");
var JWT = require("jsonwebtoken");
var cipher_1 = require("../../config/cipher");
var DEFAULT_PROJECTION = { __v: 0 };
var AI_WEI_SHARE_COUNT_OF_PAGE = 'AI_WEI_SHARE_COUNT_OF_PAGE';
exports.sharePageCountToRedis = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var PAGE_KEY;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    PAGE_KEY = req.params.page.toUpperCase();
                    return [4 /*yield*/, redis_service_1["default"].incr(AI_WEI_SHARE_COUNT_OF_PAGE + "_" + PAGE_KEY + ":")["catch"](function (e) { return console.log('sharePageCountToRedis error'); })];
                case 1:
                    _a.sent();
                    res.send("share count ok by " + AI_WEI_SHARE_COUNT_OF_PAGE + "_" + PAGE_KEY + ":");
                    return [2 /*return*/];
            }
        });
    });
};
exports.getUsers = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, page, _c, pageSize, flow, users;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = req.query, _b = _a.page, page = _b === void 0 ? 0 : _b, _c = _a.pageSize, pageSize = _c === void 0 ? 10 : _c;
                    flow = user_1["default"].find({});
                    flow.select(DEFAULT_PROJECTION);
                    return [4 /*yield*/, flow["catch"](function (e) {
                            console.log(e);
                            throw new Error('getUsers error');
                        })];
                case 1:
                    users = _d.sent();
                    res.json({
                        code: 0,
                        users: users
                    });
                    return [2 /*return*/];
            }
        });
    });
};
exports.getUserById = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var id, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4 /*yield*/, user_1["default"].findOne({ _id: id })
                            .select(DEFAULT_PROJECTION)["catch"](function (e) {
                            throw new Error('getUserById error');
                        })];
                case 1:
                    user = _a.sent();
                    res.json({
                        code: 0,
                        user: user
                    });
                    return [2 /*return*/];
            }
        });
    });
};
exports.getUserByOpenId = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userId = req.params.userId;
                    return [4 /*yield*/, user_1["default"].findOne({ openId: userId })
                            .select(DEFAULT_PROJECTION)["catch"](function (e) {
                            throw new Error('getUserById error');
                        })];
                case 1:
                    user = _a.sent();
                    res.json({
                        code: 0,
                        user: user
                    });
                    return [2 /*return*/];
            }
        });
    });
};
var testUser = {
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
    return __awaiter(this, void 0, void 0, function () {
        var code, token_1, userOfWechat, user, token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    code = req.body.code;
                    if (!process.env.NODE_ENV) return [3 /*break*/, 1];
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
                    return [3 /*break*/, 4];
                case 1:
                    if (req.session.user) {
                        token_1 = JWT.sign({ _id: req.session.user._id, iat: Date.now(), expire: Date.now() + 24 * 60 * 60 * 1000 }, cipher_1.Cipher.JWT_SECRET);
                        res.json({
                            code: 0,
                            user: req.session.user,
                            token: token_1,
                            sess: 'sess'
                        });
                    }
                    return [4 /*yield*/, WechatService.getUserInfoByCode(code)["catch"](function (e) {
                            throw new Error('userOfWechat error');
                        })
                        // 存用户
                    ];
                case 2:
                    userOfWechat = _a.sent();
                    return [4 /*yield*/, foundOrCreatedUser(userOfWechat)];
                case 3:
                    user = _a.sent();
                    token = JWT.sign({ _id: user._id, iat: Date.now(), expire: Date.now() + 24 * 60 * 60 * 1000 }, cipher_1.Cipher.JWT_SECRET);
                    req.session.user = user;
                    res.json({
                        code: 0,
                        user: user,
                        token: token
                    });
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
};
exports.getFavoriteColumns = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var favoriteColumnIds, columns;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_1["default"].findOne({ openId: req.params.userId }).then(function (data) { return data.favoriteColumnId; })];
                case 1:
                    favoriteColumnIds = _a.sent();
                    return [4 /*yield*/, _handleFavAndHisColumns(favoriteColumnIds)["catch"](function (e) {
                            console.log(e);
                            throw new Error('getFavoriteColumns Error');
                        })];
                case 2:
                    columns = _a.sent();
                    res.json({
                        code: 0,
                        columns: columns
                    });
                    return [2 /*return*/];
            }
        });
    });
};
exports.addFavoriteColumn = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var columns;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_1["default"].findOneAndUpdate({ openId: req.params.userId }, { $addToSet: { favoriteColumnId: req.params.id } }, { "new": true })];
                case 1:
                    columns = _a.sent();
                    res.json({
                        code: 0,
                        columns: columns
                    });
                    return [2 /*return*/];
            }
        });
    });
};
exports.deleteFavoriteColumn = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var columns;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_1["default"].findOneAndUpdate({ openId: req.params.userId }, { $pull: { favoriteColumnId: req.params.id } }, { "new": true })];
                case 1:
                    columns = _a.sent();
                    res.json({
                        code: 0,
                        columns: columns
                    });
                    return [2 /*return*/];
            }
        });
    });
};
exports.getHistoryColumns = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var historyColumnIds, columns;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_1["default"].findOne({ openId: req.params.userId }).then(function (data) { return new Set(data.historyColumnId).slice(); })];
                case 1:
                    historyColumnIds = _a.sent();
                    return [4 /*yield*/, _handleFavAndHisColumns(historyColumnIds)["catch"](function (e) {
                            console.log(e);
                            throw new Error('getHistoryColumns Error');
                        })];
                case 2:
                    columns = _a.sent();
                    res.json({
                        code: 0,
                        columns: columns
                    });
                    return [2 /*return*/];
            }
        });
    });
};
exports.addHistoryColumn = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var columns;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_1["default"].findOneAndUpdate({ openId: req.params.userId }, { $push: { historyColumnId: req.params.id } }, { "new": true })];
                case 1:
                    columns = _a.sent();
                    res.json({
                        code: 0,
                        columns: columns
                    });
                    return [2 /*return*/];
            }
        });
    });
};
exports.deleteHistoryColumn = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var columns;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_1["default"].findOneAndUpdate({ openId: req.params.userId }, { $pull: { historyColumnId: req.params.id } }, { "new": true })];
                case 1:
                    columns = _a.sent();
                    res.json({
                        code: 0,
                        columns: columns
                    });
                    return [2 /*return*/];
            }
        });
    });
};
function foundOrCreatedUser(user) {
    return __awaiter(this, void 0, void 0, function () {
        var found, created;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, foundAndUpdateUser(user)];
                case 1:
                    found = _a.sent();
                    if (found)
                        return [2 /*return*/, found];
                    return [4 /*yield*/, createNewUser(user)];
                case 2:
                    created = _a.sent();
                    return [2 /*return*/, created];
            }
        });
    });
}
function foundAndUpdateUser(params) {
    return __awaiter(this, void 0, void 0, function () {
        var update, found;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    update = {
                        sex: params.sex,
                        city: params.city,
                        name: params.nickname,
                        country: params.country,
                        province: params.province,
                        avatar: params.headimgurl
                    };
                    return [4 /*yield*/, user_1["default"].findOneAndUpdate({ openId: params.openid }, update, { "new": true, fields: { __v: 0 } })["catch"](function (e) {
                            console.log(e);
                            throw new Error('foundAndUpdateUser error');
                        })];
                case 1:
                    found = _a.sent();
                    return [2 /*return*/, found];
            }
        });
    });
}
function createNewUser(params) {
    return __awaiter(this, void 0, void 0, function () {
        var user, created;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = new user_1["default"]({
                        sex: params.sex,
                        city: params.city,
                        openId: params.openid,
                        name: params.nickname,
                        country: params.country,
                        province: params.province,
                        avatar: params.headimgurl
                    });
                    return [4 /*yield*/, user.save()["catch"](function (e) {
                            console.log(e);
                            throw new Error('createNewUser error');
                        })];
                case 1:
                    created = _a.sent();
                    return [2 /*return*/, created];
            }
        });
    });
}
function _sortColumnByIdsOrder(ids, columns) {
    var sortColumns = ids.map(function (item, index) {
        var idx = ids.indexOf(columns[index]._id.toString());
        return columns[idx];
    });
    return sortColumns;
}
function _filterFavoriteColumnIdsByColumns(ids) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, courseColumn_1["default"].find({}, { _id: 1 }).then(function (list) {
                        return ids.filter(function (el) { return list.find(function (val) { return val._id.toString() === el; }); });
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function _handleFavAndHisColumns(columnIds) {
    return __awaiter(this, void 0, void 0, function () {
        var ids;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _filterFavoriteColumnIdsByColumns(columnIds)];
                case 1:
                    ids = _a.sent();
                    return [4 /*yield*/, courseColumn_1["default"].find({ '_id': { $in: ids }, isRelease: true })
                            .then(function (columns) {
                            return _sortColumnByIdsOrder(ids, columns).reverse();
                        })];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
