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
    imgUrl: { type: String },
    backgroundUrl: { type: String },
    popular: { type: Boolean },
    media: { type: Boolean },
    type: { type: String },
    createTime: { type: Number, default: Date.now().valueOf() },
    updateTime: { type: Number, default: Date.now().valueOf() },
    numberOfUpdate: { type: Number, default: 1 } // 第几期课程
}, { versionKey: false });
CourseColumnSchema.index({ name: 1 });
// const CourseColumnModel = process.env.NODE_ENV !== 'production' ? mongoose.model('courseColumnTest', CourseColumnSchema) : mongoose.model('courseColumn', CourseColumnSchema)
const CourseColumnModel = mongoose.model('courseColumn', CourseColumnSchema);
exports.default = CourseColumnModel;
