import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

// 视频课程
const CourseVideoSchema = new Schema({
  name: { type: String, required: true },
  creator: { type: String, required: true },
  columnId: { type: String, required: true, ref: 'courseColumn' },
  columnName: { type: String },
  classifyId: { type: String, ref: 'courseClassify' },
  classifyName: { type: String },
  duration: { type: Number }, // 视频播放时长
  videoUrl: { type: String }, // 视频地址
  subtitle: { type: String }, // 课程子标题
  imgUrl: { type: String }, // 每个视频的配图
  createTime: { type: Number, default: Date.now().valueOf() },
  updateTime: { type: Number, default: Date.now().valueOf() }
}, { versionKey: false })

CourseVideoSchema.index({ name: 1 })

// const CourseVideoModel = process.env.NODE_ENV !== 'production' ? mongoose.model('courseVideoTest', CourseVideoSchema) : mongoose.model('courseVideo', CourseVideoSchema)
const CourseVideoModel = mongoose.model('courseVideo', CourseVideoSchema)

export default CourseVideoModel
