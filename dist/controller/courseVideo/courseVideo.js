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
const courseVideo_1 = require("../../models/courseVideo/courseVideo");
const DEFAULT_PROJECTION = { __v: 0 };
exports.addPlayCount = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        yield courseVideo_1.default.findByIdAndUpdate({ _id: req.params.id }, { $inc: { playCount: 1 } }, { new: true })
            .catch((e) => {
            console.log(e);
            throw new Error('addPlayCount error');
        });
        res.json({
            code: 0
        });
    });
};
exports.getAllVideo = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { page = 0, pageSize = 10 } = req.body;
        const flow = courseVideo_1.default.find({});
        flow.select(DEFAULT_PROJECTION);
        flow.skip(page * pageSize);
        flow.limit(pageSize);
        const video = yield flow
            .catch((e) => {
            console.log(e);
            throw new Error('getAllVideo error');
        });
        res.json({
            code: 0,
            video
        });
    });
};
exports.getOneVideoById = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const flow = courseVideo_1.default.find({ _id: req.params.id });
        flow.select(DEFAULT_PROJECTION);
        const video = yield flow
            .catch((e) => {
            console.log(e);
            throw new Error('getOneVideoById error');
        });
        res.json({
            code: 0,
            video
        });
    });
};
exports.getManyVideoByColumnId = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { page = 0, pageSize = 10 } = req.body;
        const flow = courseVideo_1.default.find({ columnId: req.params.columnId, isRelease: true });
        flow.select(DEFAULT_PROJECTION);
        flow.skip(page * pageSize);
        flow.limit(pageSize);
        const video = yield flow
            .catch((e) => {
            console.log(e);
            throw new Error('getManyVideoByColumnId error');
        });
        res.json({
            code: 0,
            video
        });
    });
};
exports.getManyVideoByClassifyId = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { page = 0, pageSize = 10 } = req.body;
        const flow = courseVideo_1.default.find({ classifyId: req.params.classifyId, isRelease: true });
        flow.select(DEFAULT_PROJECTION);
        flow.skip(page * pageSize);
        flow.limit(pageSize);
        const video = yield flow
            .catch((e) => {
            console.log(e);
            throw new Error('getManyVideoByClassifyId error');
        });
        res.json({
            code: 0,
            video
        });
    });
};
