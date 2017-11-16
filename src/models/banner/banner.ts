import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

// 广告
const BannerSchema = new Schema({
  name: { type: String, required: true },
  creator: { type: String, required: true },
  richText: { type: String }, // 广告的富文本
  imgUrl: { type: String }, // 轮播及背景配图
  createTime: { type: Number, default: Date.now().valueOf() },
  updateTime: { type: Number, default: Date.now().valueOf() }
}, { versionKey: false })

BannerSchema.index({ name: 1 })

const BannerModel = mongoose.model('banner', BannerSchema)

export default BannerModel
