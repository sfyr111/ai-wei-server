import * as mongoose from 'mongoose'
import * as moment from 'moment'
import { SchemaTypes } from "mongoose"

const d = moment(Date.now()).format('YYYY-MM-DD')
const timestamp = new Date(d).valueOf()

const Schema = mongoose.Schema

// 统计
const StatisticsSchema = new Schema({
  countDate: { type: Number, default: timestamp, required: true },
  shareCount: SchemaTypes.Mixed,
  viewCount: SchemaTypes.Mixed
}, { versionKey: false })

const StatisticsModel = mongoose.model('statistics', StatisticsSchema, 'statistics')

export default StatisticsModel
