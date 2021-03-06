"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// 音频课程
var CourseAudioSchema = new Schema({
    name: { type: String, required: true },
    creator: { type: String, required: true },
    columnId: { type: String, required: true, ref: 'courseColumn' },
    columnName: { type: String },
    classifyId: { type: String, ref: 'courseClassify' },
    classifyName: { type: String },
    duration: { type: Number },
    audioUrl: { type: String },
    createTime: { type: Number, "default": Date.now().valueOf() },
    updateTime: { type: Number, "default": Date.now().valueOf() }
}, { versionKey: false });
CourseAudioSchema.index({ name: 1 });
// const CourseAudioModel = process.env.NODE_ENV !== 'production' ? mongoose.model('courseAudioTest', CourseAudioSchema) : mongoose.model('courseAudio', CourseAudioSchema)
var CourseAudioModel = mongoose.model('courseAudio', CourseAudioSchema);
exports["default"] = CourseAudioModel;
