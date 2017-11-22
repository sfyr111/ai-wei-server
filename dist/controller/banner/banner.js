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
const banner_1 = require("../../models/banner/banner");
const DEFAULT_PROJECTION = { __v: 0 };
exports.getAllBanner = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { page = 0, pageSize = 10 } = req.body;
        const flow = banner_1.default.find({});
        flow.select(DEFAULT_PROJECTION);
        flow.skip(page * pageSize);
        flow.limit(pageSize);
        const banners = yield flow
            .catch((e) => {
            console.log(e);
            throw new Error('getAllBanner error');
        });
        res.json({
            code: 0,
            banners
        });
    });
};
exports.getBannerById = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { page = 0, pageSize = 10 } = req.body;
        const flow = banner_1.default.find({ _id: req.params.id });
        flow.select(DEFAULT_PROJECTION);
        flow.skip(page * pageSize);
        flow.limit(pageSize);
        const banner = yield flow
            .catch((e) => {
            console.log(e);
            throw new Error('getBannerById error');
        });
        res.json({
            code: 0,
            banner
        });
    });
};
