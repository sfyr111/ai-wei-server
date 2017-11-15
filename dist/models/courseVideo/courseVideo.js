"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// 视频课程
const CourseVideoSchema = new Schema({
    name: { type: String, required: true },
    creator: { type: String, required: true },
    columnId: { type: String, required: true, ref: 'courseColumn' },
    columnName: { type: String },
    classifyId: { type: String, ref: 'courseClassify' },
    classifyName: { type: String },
    duration: { type: Number },
    videoUrl: { type: String },
    subtitle: { type: String },
    imgUrl: { type: String },
    createTime: { type: Number, default: Date.now().valueOf() },
    updateTime: { type: Number, default: Date.now().valueOf() }
}, { versionKey: false });
CourseVideoSchema.index({ name: 1 });
const CourseVideoModel = mongoose.model('courseVideo', CourseVideoSchema);
exports.default = CourseVideoModel;
