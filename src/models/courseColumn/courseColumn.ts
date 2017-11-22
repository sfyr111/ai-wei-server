import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

// 课程专栏
const CourseColumnSchema = new Schema({
  name: { type: String, required: true },
  creator: { type: String, required: true },
  classifyId: { type: String, require: true, ref: 'courseClassify' },
  classifyName: { type: String },
  introduction: { type: String }, // 简介，富文本 可编辑字体大小，支持标题、段落、字体大小编辑功能
  subtitle: { type: String }, // 子标题
  imgUrl: { type: String }, // 专栏标题图片 缩略图
  backgroundUrl: { type: String }, // 专栏详情背景图片 详情背景图
  popular: { type: Boolean }, // 是否热门课程
  media: { type: Boolean }, // 是否为媒体课程专栏
  type: { type: String }, // 课程类型，文本: text, 音频: audio, 视频: video
  createTime: { type: Number, default: Date.now().valueOf() },
  updateTime: { type: Number, default: Date.now().valueOf() },
  numberOfUpdate: { type: Number, default: 1 } // 第几期课程
}, { versionKey: false })

CourseColumnSchema.index({ name: 1 })

// const CourseColumnModel = process.env.NODE_ENV !== 'production' ? mongoose.model('courseColumnTest', CourseColumnSchema) : mongoose.model('courseColumn', CourseColumnSchema)
const CourseColumnModel = mongoose.model('courseColumn', CourseColumnSchema)

export default CourseColumnModel
