"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// 课程专栏
const CourseColumnSchema = new Schema({
    name: { type: String, required: true },
    creator: { type: String, required: true },
    classifyId: { type: String, require: true, ref: 'courseClassify' },
    classifyName: { type: String },
    introduction: { type: String },
    subtitle: { type: String },
    popular: { type: Boolean },
    backgroundUrl: { type: String },
    imgUrl: { type: String },
    lastCourse: { type: String },
    media: { type: Boolean },
    createTime: { type: Number, default: Date.now().valueOf() },
    updateTime: { type: Number, default: Date.now().valueOf() }
}, { versionKey: false });
CourseColumnSchema.index({ name: 1 });
const CourseColumnModel = mongoose.model('courseColumn', CourseColumnSchema);
exports.default = CourseColumnModel;
