"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// 课程专栏
var CourseColumnSchema = new Schema({
    name: { type: String, required: true },
    creator: { type: String, required: true },
    classifyId: { type: String, require: true, ref: 'courseClassify' },
    classifyName: { type: String },
    introduction: { type: String },
    subtitle: { type: String },
    imgUrl: { type: String },
    backgroundColorIsBlack: { type: Boolean, "default": true },
    backgroundUrl: { type: String },
    popular: { type: Boolean },
    popularTitle: { type: String },
    isRelease: { type: Boolean },
    releaseTime: { type: Number },
    type: { type: String },
    createTime: { type: Number, "default": Date.now().valueOf() },
    updateTime: { type: Number, "default": Date.now().valueOf() },
    numberOfUpdate: { type: Number, "default": 1 } // 第几期课程
}, { versionKey: false });
CourseColumnSchema.index({ name: 1 });
// const CourseColumnModel = process.env.NODE_ENV !== 'production' ? mongoose.model('courseColumnTest', CourseColumnSchema) : mongoose.model('courseColumn', CourseColumnSchema)
var CourseColumnModel = mongoose.model('courseColumn', CourseColumnSchema);
exports["default"] = CourseColumnModel;
