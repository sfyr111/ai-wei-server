import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

// 文本课程统计
const TextPageSchema = new Schema({
  textId: { type: String, ref: 'courseText' },
  shareCount: { type: Number, default: 0 },
  viewCount: { type: Number, default: 0 }
})

const TextPageStatisticsSchema = new Schema({
  countDate: { type: Number, required: true },
  pages: [TextPageSchema]
}, { versionKey: false })

export const TextStatisticsModel = mongoose.model('text-statistics', TextPageStatisticsSchema, 'text-statistics')

// 专栏统计
const ColumnPageSchema = new Schema({
  columnId: { type: String, ref: 'courseColumn' },
  shareCount: { type: Number, default: 0 },
  viewCount: { type: Number, default: 0 }
})

const ColumnPageStatisticsSchema = new Schema({
  countDate: { type: Number, required: true },
  pages: [ColumnPageSchema]
}, { versionKey: false })

export const ColumnStatisticsModel = mongoose.model('column-statistics', ColumnPageStatisticsSchema, 'column-statistics')


// 普通页面统计
const CommonPageSchema = new Schema({
  pageName: { type: String },
  shareCount: { type: Number, default: 0 },
  viewCount: { type: Number, default: 0 }
})

const CommonPageStatisticsSchema = new Schema({
  countDate: { type: Number, required: true },
  pages: [CommonPageSchema]
}, { versionKey: false })

export const CommonPageStatisticsModel = mongoose.model('common-page-statistics', CommonPageStatisticsSchema, 'common-page-statistics')

