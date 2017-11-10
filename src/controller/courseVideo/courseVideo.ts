import CourseVideoModel from '../../models/courseVideo/courseVideo'

const DEFAULT_PROJECTION = { __v: 0 }

export const getAllVideo = async function (req: any, res: any, next: any): Promise<any> {
  const { page = 0, pageSize = 10 } = req.body
  const flow = CourseVideoModel.find({})
  flow.select(DEFAULT_PROJECTION)
  flow.skip(page * pageSize)
  flow.limit(pageSize)

  const video = await flow
    .catch((e: any): void => {
      console.log(e)
      throw new Error('getAllVideo error')
    })
  res.json({
    code: 0,
    video
  })
}

export const getOneVideoById = async function (req: any, res: any, next: any): Promise<any> {
  const flow = CourseVideoModel.find({ _id: req.params.id })
  flow.select(DEFAULT_PROJECTION)

  const video = await flow
    .catch((e: any): void => {
      console.log(e)
      throw new Error('getOneVideoById error')
    })
  res.json({
    code: 0,
    video
  })
}

export const getManyVideoByColumnId = async function (req: any, res: any, next: any): Promise<any> {
  const { page = 0, pageSize = 10 } = req.body
  const flow = CourseVideoModel.find({ columnId: req.params.columnId })
  flow.select(DEFAULT_PROJECTION)
  flow.skip(page * pageSize)
  flow.limit(pageSize)

  const video = await flow
    .catch((e: any): void => {
      console.log(e)
      throw new Error('getManyVideoByColumnId error')
    })
  res.json({
    code: 0,
    video
  })
}

export const getManyVideoByClassifyId = async function (req: any, res: any, next: any): Promise<any> {
  const { page = 0, pageSize = 10 } = req.body
  const flow = CourseVideoModel.find({ classifyId: req.params.classifyId })
  flow.select(DEFAULT_PROJECTION)
  flow.skip(page * pageSize)
  flow.limit(pageSize)

  const video = await flow
    .catch((e: any): void => {
      console.log(e)
      throw new Error('getManyVideoByClassifyId error')
    })
  res.json({
    code: 0,
    video
  })
}
