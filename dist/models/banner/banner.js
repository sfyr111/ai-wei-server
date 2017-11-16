"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// 广告
const BannerSchema = new Schema({
    name: { type: String, required: true },
    creator: { type: String, required: true },
    richText: { type: String },
    imgUrl: { type: String },
    createTime: { type: Number, default: Date.now().valueOf() },
    updateTime: { type: Number, default: Date.now().valueOf() }
}, { versionKey: false });
BannerSchema.index({ name: 1 });
const BannerModel = mongoose.model('banner', BannerSchema);
exports.default = BannerModel;
