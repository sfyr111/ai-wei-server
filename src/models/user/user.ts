import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

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
})

UserSchema.index({ name: 1, openId: 1 }, { unique: true })

const UserModel = mongoose.model('user', UserSchema)

export default UserModel
