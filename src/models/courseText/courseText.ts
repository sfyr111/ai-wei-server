import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

// 文本课程
const CourseTextSchema = new Schema({
  name: { type: String, required: true },
  creator: { type: String, required: true },
  columnId: { type: String, required: true, ref: 'courseColumn' },
  columnName: { type: String },
  classifyId: { type: String, ref: 'courseClassify' },
  classifyName: { type: String },
  richText: { type: String }, // 课程相应的富文本
  audio: { type: Schema.Types.Mixed, default: { title: '', url: '', playTime: -1, fileSize: '0M' } }, // 文本课程音频数据
  createTime: { type: Number, default: Date.now().valueOf() },
  updateTime: { type: Number, default: Date.now().valueOf() }
}, { versionKey: false })

CourseTextSchema.index({ name: 1 })

const CourseTextModel = process.env.NODE_ENV !== 'production' ? mongoose.model('courseTextTest', CourseTextSchema) : mongoose.model('courseText', CourseTextSchema)

export default CourseTextModel
