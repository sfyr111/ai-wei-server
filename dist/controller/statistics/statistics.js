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
var statistics_1 = require("../../models/statistics/statistics");
var moment = require("moment");
exports.CountTextCourse = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var d, timestamp, todayCount, pageCount;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    d = moment(Date.now()).format('YYYY-MM-DD');
                    timestamp = new Date(d).valueOf() // 当天时间戳
                    ;
                    return [4 /*yield*/, statistics_1.TextStatisticsModel.findOne({ countDate: timestamp })];
                case 1:
                    todayCount = _a.sent();
                    if (!!todayCount) return [3 /*break*/, 3];
                    return [4 /*yield*/, statistics_1.TextStatisticsModel.create({ countDate: timestamp })];
                case 2:
                    todayCount = _a.sent();
                    _a.label = 3;
                case 3:
                    pageCount = todayCount.pages.find(function (el) { return el.textId === req.params.textId; });
                    if (!!pageCount) return [3 /*break*/, 6];
                    return [4 /*yield*/, todayCount.update({ $push: { pages: {
                                    textId: req.params.textId,
                                    shareCount: req.params.countType === 'share' ? 1 : 0,
                                    viewCount: req.params.countType === 'view' ? 1 : 0
                                } } })];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, todayCount.save()];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 6:
                    pageCount[req.params.countType + "Count"]++;
                    return [4 /*yield*/, todayCount.save()];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    res.json({
                        code: 0,
                        msg: 'ok'
                    });
                    return [2 /*return*/];
            }
        });
    });
};
exports.CountColumnCourse = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var d, timestamp, todayCount, pageCount;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    d = moment(Date.now()).format('YYYY-MM-DD');
                    timestamp = new Date(d).valueOf() // 当天时间戳
                    ;
                    return [4 /*yield*/, statistics_1.ColumnStatisticsModel.findOne({ countDate: timestamp })];
                case 1:
                    todayCount = _a.sent();
                    if (!!todayCount) return [3 /*break*/, 3];
                    return [4 /*yield*/, statistics_1.ColumnStatisticsModel.create({ countDate: timestamp })];
                case 2:
                    todayCount = _a.sent();
                    _a.label = 3;
                case 3:
                    pageCount = todayCount.pages.find(function (el) { return el.columnId === req.params.columnId; });
                    if (!!pageCount) return [3 /*break*/, 6];
                    return [4 /*yield*/, todayCount.update({ $push: { pages: {
                                    columnId: req.params.columnId,
                                    shareCount: req.params.countType === 'share' ? 1 : 0,
                                    viewCount: req.params.countType === 'view' ? 1 : 0
                                } } })];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, todayCount.save()];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 6:
                    pageCount[req.params.countType + "Count"]++;
                    return [4 /*yield*/, todayCount.save()];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    res.json({
                        code: 0,
                        msg: 'ok'
                    });
                    return [2 /*return*/];
            }
        });
    });
};
exports.CountCommonPage = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var d, timestamp, todayCount, pageCount;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    d = moment(Date.now()).format('YYYY-MM-DD');
                    timestamp = new Date(d).valueOf() // 当天时间戳
                    ;
                    return [4 /*yield*/, statistics_1.CommonPageStatisticsModel.findOne({ countDate: timestamp })];
                case 1:
                    todayCount = _a.sent();
                    if (!!todayCount) return [3 /*break*/, 3];
                    return [4 /*yield*/, statistics_1.CommonPageStatisticsModel.create({ countDate: timestamp })];
                case 2:
                    todayCount = _a.sent();
                    _a.label = 3;
                case 3:
                    pageCount = todayCount.pages.find(function (el) { return el.pageName === req.params.pageName; });
                    if (!!pageCount) return [3 /*break*/, 6];
                    return [4 /*yield*/, todayCount.update({ $push: { pages: {
                                    pageName: req.params.pageName,
                                    shareCount: req.params.countType === 'share' ? 1 : 0,
                                    viewCount: req.params.countType === 'view' ? 1 : 0
                                } } })];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, todayCount.save()];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 6:
                    pageCount[req.params.countType + "Count"]++;
                    return [4 /*yield*/, todayCount.save()];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    res.json({
                        code: 0,
                        msg: 'ok'
                    });
                    return [2 /*return*/];
            }
        });
    });
};
exports.addCount = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var d, timestamp, Model, todayCount, pageCount, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    d = moment(Date.now()).format('YYYY-MM-DD');
                    timestamp = new Date(d).valueOf() // 当天时间戳
                    ;
                    if (req.params.countKey === 'textId')
                        Model = statistics_1.TextStatisticsModel;
                    if (req.params.countKey === 'columnId')
                        Model = statistics_1.ColumnStatisticsModel;
                    if (req.params.countKey === 'pageName')
                        Model = statistics_1.CommonPageStatisticsModel;
                    return [4 /*yield*/, Model.findOne({ countDate: timestamp })];
                case 1:
                    todayCount = _b.sent();
                    if (!!todayCount) return [3 /*break*/, 3];
                    return [4 /*yield*/, Model.create({ countDate: timestamp })];
                case 2:
                    todayCount = _b.sent();
                    _b.label = 3;
                case 3:
                    pageCount = todayCount.pages.find(function (el) { return el[req.params.countKey] === req.params.countValue; });
                    if (!!pageCount) return [3 /*break*/, 6];
                    return [4 /*yield*/, todayCount.update({ $push: { pages: (_a = {},
                                    _a[req.params.countKey] = req.params.countValue,
                                    _a.shareCount = req.params.countType === 'share' ? 1 : 0,
                                    _a.viewCount = req.params.countType === 'view' ? 1 : 0,
                                    _a) } })];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, todayCount.save()];
                case 5:
                    _b.sent();
                    return [3 /*break*/, 8];
                case 6:
                    pageCount[req.params.countType + "Count"]++;
                    return [4 /*yield*/, todayCount.save()];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8:
                    res.json({
                        code: 0,
                        msg: 'ok'
                    });
                    return [2 /*return*/];
            }
        });
    });
};
