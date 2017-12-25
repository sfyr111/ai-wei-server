"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// 广告
var BannerSchema = new Schema({
    name: { type: String, required: true },
    creator: { type: String, required: true },
    richText: { type: String },
    imgUrl: { type: String },
    createTime: { type: Number, "default": Date.now().valueOf() },
    updateTime: { type: Number, "default": Date.now().valueOf() }
}, { versionKey: false });
BannerSchema.index({ name: 1 });
var BannerModel = mongoose.model('banner', BannerSchema);
exports["default"] = BannerModel;
