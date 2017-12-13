"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// 文本课程
const CourseTextSchema = new Schema({
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
    readCount: { type: Number, default: 0 },
    agreedUsers: { type: Array },
    audio: { type: Schema.Types.Mixed, default: { title: '', url: '', playTime: -1, fileSize: '0M' } },
    createTime: { type: Number, default: Date.now().valueOf() },
    updateTime: { type: Number, default: Date.now().valueOf() }
}, { versionKey: false });
CourseTextSchema.index({ name: 1 });
// const CourseTextModel = process.env.NODE_ENV !== 'production' ? mongoose.model('courseTextTest', CourseTextSchema) : mongoose.model('courseText', CourseTextSchema)
const CourseTextModel = mongoose.model('courseText', CourseTextSchema);
exports.default = CourseTextModel;
