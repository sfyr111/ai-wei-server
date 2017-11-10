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
  article: { type: String }, // 课程相应的富文本
  createTime: { type: Number, default: Date.now().valueOf() },
  updateTime: { type: Number, default: Date.now().valueOf() }
}, { versionKey: false })

CourseTextSchema.index({ name: 1 })

const CourseTextModel = mongoose.model('courseText', CourseTextSchema)

export default CourseTextModel
