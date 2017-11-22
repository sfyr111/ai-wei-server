import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

// 音频课程
const CourseAudioSchema = new Schema({
  name: { type: String, required: true },
  creator: { type: String, required: true },
  columnId: { type: String, required: true, ref: 'courseColumn' },
  columnName: { type: String },
  classifyId: { type: String, ref: 'courseClassify' },
  classifyName: { type: String },
  duration: { type: Number }, // 音频播放时长
  audioUrl: { type: String }, // 音频地址
  createTime: { type: Number, default: Date.now().valueOf() },
  updateTime: { type: Number, default: Date.now().valueOf() }
}, { versionKey: false })

CourseAudioSchema.index({ name: 1 })

// const CourseAudioModel = process.env.NODE_ENV !== 'production' ? mongoose.model('courseAudioTest', CourseAudioSchema) : mongoose.model('courseAudio', CourseAudioSchema)
const CourseAudioModel = mongoose.model('courseAudio', CourseAudioSchema)

export default CourseAudioModel
