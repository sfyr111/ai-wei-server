"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: { type: String, required: true },
    openId: { type: String, required: true },
    sex: String,
    avatar: String,
    city: String,
    province: String,
    country: String,
    favoriteColumnId: [String],
    historyColumnId: [String]
});
UserSchema.index({ name: 1, openId: 1 }, { unique: true });
var UserModel = mongoose.model('user', UserSchema);
exports["default"] = UserModel;
