"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// 文本课程
var CourseTextSchema = new Schema({
    name: { type: String, required: true },
    creator: { type: String, required: true },
    columnId: { type: String, required: true, ref: 'courseColumn' },
    columnName: { type: String },
    classifyId: { type: String, ref: 'courseClassify' },
    classifyName: { type: String },
    richText: { type: String },
    introduction: { type: String },
    author: { type: String },
    authorAvatar: { type: String },
    isOriginal: { type: Boolean },
    readCount: { type: Number, "default": 0 },
    shareCount: { type: Number, "default": 0 },
    agreedUsers: { type: Array },
    articleImg: { type: String },
    audio: { type: Schema.Types.Mixed, "default": { title: '', url: '', playTime: -1, fileSize: '0M', finishedUsers: [] } },
    isRelease: { type: Boolean },
    releaseTime: { type: Number },
    createTime: { type: Number, "default": Date.now().valueOf() },
    updateTime: { type: Number, "default": Date.now().valueOf() }
}, { versionKey: false });
CourseTextSchema.index({ name: 1 });
// const CourseTextModel = process.env.NODE_ENV !== 'production' ? mongoose.model('courseTextTest', CourseTextSchema) : mongoose.model('courseText', CourseTextSchema)
var CourseTextModel = mongoose.model('courseText', CourseTextSchema);
exports["default"] = CourseTextModel;
