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
var courseAudio_1 = require("../../models/courseAudio/courseAudio");
var DEFAULT_PROJECTION = { __v: 0 };
exports.getAllAudio = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, page, _c, pageSize, flow, audio;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = req.query, _b = _a.page, page = _b === void 0 ? 0 : _b, _c = _a.pageSize, pageSize = _c === void 0 ? 10 : _c;
                    flow = courseAudio_1["default"].find({});
                    flow.select(DEFAULT_PROJECTION);
                    return [4 /*yield*/, flow["catch"](function (e) {
                            console.log(e);
                            throw new Error('getAllAudio error');
                        })];
                case 1:
                    audio = _d.sent();
                    res.json({
                        code: 0,
                        audio: audio
                    });
                    return [2 /*return*/];
            }
        });
    });
};
exports.getOneAudioById = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var flow, audio;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    flow = courseAudio_1["default"].find({ _id: req.params.id });
                    flow.select(DEFAULT_PROJECTION);
                    return [4 /*yield*/, flow["catch"](function (e) {
                            console.log(e);
                            throw new Error('getOneAudioById error');
                        })];
                case 1:
                    audio = _a.sent();
                    res.json({
                        code: 0,
                        audio: audio
                    });
                    return [2 /*return*/];
            }
        });
    });
};
exports.getManyAudioByColumnId = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, page, _c, pageSize, flow, audio;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = req.query, _b = _a.page, page = _b === void 0 ? 0 : _b, _c = _a.pageSize, pageSize = _c === void 0 ? 10 : _c;
                    flow = courseAudio_1["default"].find({ columnId: req.params.columnId });
                    flow.select(DEFAULT_PROJECTION);
                    return [4 /*yield*/, flow["catch"](function (e) {
                            console.log(e);
                            throw new Error('getManyAudioByColumnId error');
                        })];
                case 1:
                    audio = _d.sent();
                    res.json({
                        code: 0,
                        audio: audio
                    });
                    return [2 /*return*/];
            }
        });
    });
};
exports.getManyAudioByClassifyId = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, page, _c, pageSize, flow, audio;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = req.query, _b = _a.page, page = _b === void 0 ? 0 : _b, _c = _a.pageSize, pageSize = _c === void 0 ? 10 : _c;
                    flow = courseAudio_1["default"].find({ classifyId: req.params.classifyId });
                    flow.select(DEFAULT_PROJECTION);
                    return [4 /*yield*/, flow["catch"](function (e) {
                            console.log(e);
                            throw new Error('getManyAudioByClassifyId error');
                        })];
                case 1:
                    audio = _d.sent();
                    res.json({
                        code: 0,
                        audio: audio
                    });
                    return [2 /*return*/];
            }
        });
    });
};
