"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// 课程分类
var CourseClassifySchema = new Schema({
    name: { type: String, required: true },
    creator: { type: String, required: true },
    introduction: { type: String },
    backgroundUrl: { type: String },
    createTime: { type: Number, "default": Date.now().valueOf() },
    updateTime: { type: Number, "default": Date.now().valueOf() }
}, { versionKey: false });
CourseClassifySchema.index({ name: 1 });
var CourseClassifyModel = mongoose.model('courseClassify', CourseClassifySchema);
exports["default"] = CourseClassifyModel;
