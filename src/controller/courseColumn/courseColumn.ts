import CourseColumnModel from '../../models/courseColumn/courseColumn'

const DEFAULT_PROJECTION = { __v: 0 }

export const addShareCount = async function (req: any, res: any, next: any): Promise<any> {
  await CourseColumnModel.findByIdAndUpdate({ _id: req.params.id }, { $inc: { shareCount: 1 }}, { new: true })
    .catch((e: any) => {
      console.log(e)
      throw new Error('addShareCount error')
    })
  res.json({
    code: 0
  })
}

export const getAllCloumn = async function (req: any, res: any, next: any): Promise<any> {
  const { page = 0, pageSize = 10 } = req.body
  const flow = CourseColumnModel.find({})
  flow.select(DEFAULT_PROJECTION)
  flow.skip(page * pageSize)
  flow.limit(pageSize)

  const column = await flow
    .catch((e: any): void => {
      console.log(e)
      throw new Error('getAllCloumn error')
    })
  res.json({
    code: 0,
    column
  })
}

export const getOneCloumnById = async function (req: any, res: any, next: any): Promise<any> {
  const flow = CourseColumnModel.find({ _id: req.params.id })
  flow.select(DEFAULT_PROJECTION)

  const column = await flow
    .catch((e: any): void => {
      console.log(e)
      throw new Error('getOneCloumnById error')
    })
  res.json({
    code: 0,
    column
  })
}

export const getManyCloumnByClassifyId = async function (req: any, res: any, next: any): Promise<any> {
  const flow = CourseColumnModel.find({ classifyId: req.params.classifyId, isRelease: true })
  flow.select(DEFAULT_PROJECTION)
  flow.sort({ createTime: -1 })

  const column = await flow
    .catch((e: any): void => {
      console.log(e)
      throw new Error('getManyCloumnByClassifyId error')
    })
  res.json({
    code: 0,
    column
  })
}

export const getPopularCloumn = async function (req: any, res: any, next: any): Promise<any> {
  const flow = CourseColumnModel.find({ popular: true, isRelease: true })
  flow.select(DEFAULT_PROJECTION)
  flow.sort({ createTime: -1 })

  const column = await flow
    .catch((e: any): void => {
      console.log(e)
      throw new Error('getPopularCloumn error')
    })
  res.json({
    code: 0,
    column
  })
}
