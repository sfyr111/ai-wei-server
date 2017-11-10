export interface WechatUser {
  sex?: String,
  city?: String,
  openid?: String,
  nickname?: String,
  country?: String,
  province?: String,
  headimgurl?: String,
}

export interface WechatTokenObj {
  access_token: String,
  expires_in: Number
  refresh_token: String,
  openid: String,
  scope: String,
  create_at: Number
}