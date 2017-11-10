import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

// 课程分类
const CourseClassifySchema = new Schema({
  name: { type: String, required: true }, // 深度学习、机器视觉、语音识别
  creator: { type: String, required: true },
  introduction: { type: String }, // 分类简介
  backgroundUrl: { type: String },
  createTime: { type: Number, default: Date.now().valueOf() },
  updateTime: { type: Number, default: Date.now().valueOf() }
}, { versionKey: false })

CourseClassifySchema.index({ name: 1 })

const CourseClassifyModel = mongoose.model('courseClassify', CourseClassifySchema)

export default CourseClassifyModel
