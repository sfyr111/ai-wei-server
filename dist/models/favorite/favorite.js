"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// 收藏专栏
// const FavoriteColumnSchema = new Schema({
//   name: { type: String, required: true },
//   creator: { type: Schema.Types.ObjectId, required: true }, // 收藏的用户
//   classifyId: { type: Schema.Types.ObjectId, require: true, ref: 'courseClassify' },
//   classifyName: { type: String },
//   introduction: { type: String }, // 简介
//   subtitle: { type: String }, // 子标题
//   popular: { type: Boolean }, // 是否热门课程
//   backgroundUrl: { type: String }, // 专栏详情背景图片
//   imgUrl: { type: String }, // 专栏标题图片
//   lastCourse: { type: String }, // 最新课程的name
//   createTime: { type: Number, default: Date.now().valueOf() },
//   updateTime: { type: Number, default: Date.now().valueOf() }
// }, { versionKey: false })
const FavoriteColumnSchema = new Schema({
    columnId: { type: String, required: true, ref: "courseColumn" },
    creator: { type: String, required: true }
}, { versionKey: false });
const FavoriteColumnModel = mongoose.model('favoriteColumn', FavoriteColumnSchema);
exports.default = FavoriteColumnModel;
