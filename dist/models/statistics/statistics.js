"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// 文本课程统计
var TextPageSchema = new Schema({
    textId: { type: String, ref: 'courseText' },
    shareCount: { type: Number, "default": 0 },
    viewCount: { type: Number, "default": 0 }
});
var TextPageStatisticsSchema = new Schema({
    countDate: { type: Number, required: true },
    pages: [TextPageSchema]
}, { versionKey: false });
exports.TextStatisticsModel = mongoose.model('text-statistics', TextPageStatisticsSchema, 'text-statistics');
// 专栏统计
var ColumnPageSchema = new Schema({
    columnId: { type: String, ref: 'courseColumn' },
    shareCount: { type: Number, "default": 0 },
    viewCount: { type: Number, "default": 0 }
});
var ColumnPageStatisticsSchema = new Schema({
    countDate: { type: Number, required: true },
    pages: [ColumnPageSchema]
}, { versionKey: false });
exports.ColumnStatisticsModel = mongoose.model('column-statistics', ColumnPageStatisticsSchema, 'column-statistics');
// 普通页面统计
var CommonPageSchema = new Schema({
    pageName: { type: String },
    shareCount: { type: Number, "default": 0 },
    viewCount: { type: Number, "default": 0 }
});
var CommonPageStatisticsSchema = new Schema({
    countDate: { type: Number, required: true },
    pages: [CommonPageSchema]
}, { versionKey: false });
exports.CommonPageStatisticsModel = mongoose.model('common-page-statistics', CommonPageStatisticsSchema, 'common-page-statistics');
