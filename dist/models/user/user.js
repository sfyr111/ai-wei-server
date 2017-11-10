"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
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
const UserModel = mongoose.model('user', UserSchema);
exports.default = UserModel;
