import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

// 课程专栏
const CourseColumnSchema = new Schema({
  name: { type: String, required: true },
  creator: { type: String, required: true },
  classifyId: { type: String, require: true, ref: 'courseClassify' },
  classifyName: { type: String },
  introduction: { type: String }, // 简介
  subtitle: { type: String }, // 子标题
  popular: { type: Boolean }, // 是否热门课程
  backgroundUrl: { type: String }, // 专栏详情背景图片
  imgUrl: { type: String }, // 专栏标题图片
  lastCourse: { type: String }, // 最新课程的name
  media: { type: Boolean }, // 是否为媒体课程专栏
  createTime: { type: Number, default: Date.now().valueOf() },
  updateTime: { type: Number, default: Date.now().valueOf() }
}, { versionKey: false })

CourseColumnSchema.index({ name: 1 })

const CourseColumnModel = mongoose.model('courseColumn', CourseColumnSchema)

export default CourseColumnModel
