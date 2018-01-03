"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var moment = require("moment");
var mongoose_1 = require("mongoose");
var d = moment(Date.now()).format('YYYY-MM-DD');
var timestamp = new Date(d).valueOf();
var Schema = mongoose.Schema;
// 统计
var StatisticsSchema = new Schema({
    countDate: { type: Number, "default": timestamp, required: true },
    shareCount: mongoose_1.SchemaTypes.Mixed,
    viewCount: mongoose_1.SchemaTypes.Mixed
}, { versionKey: false });
var StatisticsModel = mongoose.model('statistics', StatisticsSchema, 'statistics');
exports["default"] = StatisticsModel;
