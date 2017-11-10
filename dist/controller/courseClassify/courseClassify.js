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
const courseClassify_1 = require("../../models/courseClassify/courseClassify");
const DEFAULT_PROJECTION = { __v: 0 };
exports.getAllClassify = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { page = 0, pageSize = 10 } = req.body;
        const flow = courseClassify_1.default.find({});
        flow.select(DEFAULT_PROJECTION);
        flow.skip(page * pageSize);
        flow.limit(pageSize);
        const classify = yield flow
            .catch((e) => {
            console.log(e);
            throw new Error('getAllClassify error');
        });
        res.json({
            code: 0,
            classify
        });
    });
};
exports.getClassifyById = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const flow = courseClassify_1.default.find({ _id: req.params.id });
        flow.select(DEFAULT_PROJECTION);
        const classify = yield flow
            .catch((e) => {
            console.log(e);
            throw new Error('getClassifyById error');
        });
        res.json({
            code: 0,
            classify
        });
    });
};
