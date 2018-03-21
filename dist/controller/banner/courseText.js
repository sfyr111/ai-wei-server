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
const courseText_1 = require("../../models/courseText/courseText");
const DEFAULT_PROJECTION = { __v: 0 };
exports.getAllText = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { page = 0, pageSize = 10 } = req.body;
        const flow = courseText_1.default.find({});
        flow.select(DEFAULT_PROJECTION);
        // flow.skip(page * pageSize);
        // flow.limit(pageSize);
        const text = yield flow
            .catch((e) => {
            console.log(e);
            throw new Error('getAllText error');
        });
        res.json({
            code: 0,
            text
        });
    });
};
exports.getOneTextById = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const flow = courseText_1.default.find({ _id: req.params.id });
        flow.select(DEFAULT_PROJECTION);
        const text = yield flow
            .catch((e) => {
            console.log(e);
            throw new Error('getOneTextById error');
        });
        res.json({
            code: 0,
            text
        });
    });
};
exports.getManyTextByColumnId = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { page = 0, pageSize = 10 } = req.body;
        const flow = courseText_1.default.find({ columnId: req.params.columnId });
        flow.select(DEFAULT_PROJECTION);
        // flow.skip(page * pageSize);
        // flow.limit(pageSize);
        const text = yield flow
            .catch((e) => {
            console.log(e);
            throw new Error('getManyTextByColumnId error');
        });
        res.json({
            code: 0,
            text
        });
    });
};
exports.getManyTextByClassifyId = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { page = 0, pageSize = 10 } = req.body;
        const flow = courseText_1.default.find({ classifyId: req.params.classifyId });
        flow.select(DEFAULT_PROJECTION);
        // flow.skip(page * pageSize);
        // flow.limit(pageSize);
        const text = yield flow
            .catch((e) => {
            console.log(e);
            throw new Error('getManyTextByClassifyId error');
        });
        res.json({
            code: 0,
            text
        });
    });
};
