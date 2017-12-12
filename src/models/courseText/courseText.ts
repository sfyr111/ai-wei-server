import * as mongoose from 'mongoose'
import {isNumber} from "util";

const Schema = mongoose.Schema

// 文本课程
const CourseTextSchema = new Schema({
  name: { type: String, required: true }, // 课程名称
  creator: { type: String, required: true },
  columnId: { type: String, required: true, ref: 'courseColumn' },
  columnName: { type: String },
  classifyId: { type: String, ref: 'courseClassify' },
  classifyName: { type: String },
  richText: { type: String }, // 课程相应的富文本
  introduction: { type: String }, // 文本课程简介，普通文本
  author: { type: String },
  isOriginal: { type: Boolean }, // 是否为原创
  readCount: { type: Number, default: 0 }, // 阅读量
  agreedUsers: { type: Array }, // 阅读量
  audio: { type: Schema.Types.Mixed, default: { title: '', url: '', playTime: -1, fileSize: '0M' } }, // 文本课程音频数据
  createTime: { type: Number, default: Date.now().valueOf() },
  updateTime: { type: Number, default: Date.now().valueOf() }
}, { versionKey: false })

CourseTextSchema.index({ name: 1 })

// const CourseTextModel = process.env.NODE_ENV !== 'production' ? mongoose.model('courseTextTest', CourseTextSchema) : mongoose.model('courseText', CourseTextSchema)
const CourseTextModel = mongoose.model('courseText', CourseTextSchema)

export default CourseTextModel
