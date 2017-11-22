import BannerModel from '../../models/banner/banner'

const DEFAULT_PROJECTION = { __v: 0 }

export const getAllBanner = async function (req: any, res: any, next: any): Promise<any> {
  const { page = 0, pageSize = 10 } = req.body
  const flow = BannerModel.find({})
  flow.select(DEFAULT_PROJECTION)
  flow.skip(page * pageSize)
  flow.limit(pageSize)

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
  const { page = 0, pageSize = 10 } = req.body
  const flow = BannerModel.find({ _id: req.params.id })
  flow.select(DEFAULT_PROJECTION)
  flow.skip(page * pageSize)
  flow.limit(pageSize)

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
