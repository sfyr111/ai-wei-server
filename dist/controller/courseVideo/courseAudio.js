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
const courseAudio_1 = require("../../models/courseAudio/courseAudio");
const DEFAULT_PROJECTION = { __v: 0 };
exports.getAllAudio = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { page = 0, pageSize = 10 } = req.body;
        const flow = courseAudio_1.default.find({});
        flow.select(DEFAULT_PROJECTION);
        // flow.skip(page * pageSize);
        // flow.limit(pageSize);
        const audio = yield flow
            .catch((e) => {
            console.log(e);
            throw new Error('getAllAudio error');
        });
        res.json({
            code: 0,
            audio
        });
    });
};
exports.getOneAudioById = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const flow = courseAudio_1.default.find({ _id: req.params.id });
        flow.select(DEFAULT_PROJECTION);
        const audio = yield flow
            .catch((e) => {
            console.log(e);
            throw new Error('getOneAudioById error');
        });
        res.json({
            code: 0,
            audio
        });
    });
};
exports.getManyAudioByColumnId = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { page = 0, pageSize = 10 } = req.body;
        const flow = courseAudio_1.default.find({ columnId: req.params.columnId });
        flow.select(DEFAULT_PROJECTION);
        // flow.skip(page * pageSize);
        // flow.limit(pageSize);
        const audio = yield flow
            .catch((e) => {
            console.log(e);
            throw new Error('getManyAudioByColumnId error');
        });
        res.json({
            code: 0,
            audio
        });
    });
};
exports.getManyAudioByClassifyId = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { page = 0, pageSize = 10 } = req.body;
        const flow = courseAudio_1.default.find({ classifyId: req.params.classifyId });
        flow.select(DEFAULT_PROJECTION);
        // flow.skip(page * pageSize);
        // flow.limit(pageSize);
        const audio = yield flow
            .catch((e) => {
            console.log(e);
            throw new Error('getManyAudioByClassifyId error');
        });
        res.json({
            code: 0,
            audio
        });
    });
};
