"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// 课程分类
const CourseClassifySchema = new Schema({
    name: { type: String, required: true },
    creator: { type: String, required: true },
    introduction: { type: String },
    backgroundUrl: { type: String },
    createTime: { type: Number, default: Date.now().valueOf() },
    updateTime: { type: Number, default: Date.now().valueOf() }
}, { versionKey: false });
CourseClassifySchema.index({ name: 1 });
const CourseClassifyModel = mongoose.model('courseClassify', CourseClassifySchema);
exports.default = CourseClassifyModel;
