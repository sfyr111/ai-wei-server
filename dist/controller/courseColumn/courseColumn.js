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
const courseColumn_1 = require("../../models/courseColumn/courseColumn");
const DEFAULT_PROJECTION = { __v: 0 };
exports.getAllCloumn = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { page = 0, pageSize = 10 } = req.body;
        const flow = courseColumn_1.default.find({});
        flow.select(DEFAULT_PROJECTION);
        flow.skip(page * pageSize);
        flow.limit(pageSize);
        const column = yield flow
            .catch((e) => {
            console.log(e);
            throw new Error('getAllCloumn error');
        });
        res.json({
            code: 0,
            column
        });
    });
};
exports.getOneCloumnById = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const flow = courseColumn_1.default.find({ _id: req.params.id });
        flow.select(DEFAULT_PROJECTION);
        const column = yield flow
            .catch((e) => {
            console.log(e);
            throw new Error('getOneCloumnById error');
        });
        res.json({
            code: 0,
            column
        });
    });
};
exports.getManyCloumnByClassifyId = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const flow = courseColumn_1.default.find({ classifyId: req.params.classifyId, isRelease: true });
        flow.select(DEFAULT_PROJECTION);
        const column = yield flow
            .catch((e) => {
            console.log(e);
            throw new Error('getManyCloumnByClassifyId error');
        });
        res.json({
            code: 0,
            column
        });
    });
};
exports.getPopularCloumn = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const flow = courseColumn_1.default.find({ popular: true, isRelease: true });
        flow.select(DEFAULT_PROJECTION);
        const column = yield flow
            .catch((e) => {
            console.log(e);
            throw new Error('getPopularCloumn error');
        });
        res.json({
            code: 0,
            column
        });
    });
};
