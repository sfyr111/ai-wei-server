import BannerModel from '../../models/banner/banner'

const DEFAULT_PROJECTION = { __v: 0 }

export const getAllBanner = async function (req: any, res: any, next: any): Promise<any> {
  const flow = BannerModel.find({})
  flow.select(DEFAULT_PROJECTION)

  const banners = await flow
    .catch((e: any): void => {
      console.log(e)
      throw new Error('getAllBanner error')
    })
  res.json({
    code: 0,
    banners
  })
}

export const getBannerById = async function (req: any, res: any, next: any): Promise<any> {
  const flow = BannerModel.find({ _id: req.params.id })
  flow.select(DEFAULT_PROJECTION)

  const banner = await flow
    .catch((e: any): void => {
      console.log(e)
      throw new Error('getBannerById error')
    })
  res.json({
    code: 0,
    banner
  })
}
