import CourseTextModel from '../../models/courseText/courseText'

const DEFAULT_PROJECTION = { __v: 0 }

export const addAgreeCount = async function (req: any, res: any, next: any): Promise<any> {
  await CourseTextModel.findByIdAndUpdate({ _id: req.params.id }, { $addToSet: { agreedUsers: req.params.userId } }, { new: true })
    .catch((e: any) => {
      console.log(e)
      throw new Error('addReadedCount error')
    })
  res.json({
    code: 0
  })
}
export const addReadedCount = async function (req: any, res: any, next: any): Promise<any> {
  await CourseTextModel.findByIdAndUpdate({ _id: req.params.id }, { $inc: { readCount: 1 }}, { new: true })
    .catch((e: any) => {
      console.log(e)
      throw new Error('addReadedCount error')
    })
  res.json({
    code: 0
  })
}

export const getAllText = async function (req: any, res: any, next: any): Promise<any> {
  const { page = 0, pageSize = 10 } = req.body
  const flow = CourseTextModel.find({})
  flow.select(DEFAULT_PROJECTION)
  flow.skip(page * pageSize)
  flow.limit(pageSize)

  const text = await flow
    .catch((e: any): void => {
      console.log(e)
      throw new Error('getAllText error')
    })
  res.json({
    code: 0,
    text
  })
}

export const getOneTextById = async function (req: any, res: any, next: any): Promise<any> {
  const flow = CourseTextModel.find({ _id: req.params.id })
  flow.select(DEFAULT_PROJECTION)

  const text = await flow
    .catch((e: any): void => {
      console.log(e)
      throw new Error('getOneTextById error')
    })
  res.json({
    code: 0,
    text
  })
}

export const getManyTextByColumnId = async function (req: any, res: any, next: any): Promise<any> {
  const { page = 0, pageSize = 10 } = req.body
  const flow = CourseTextModel.find({ columnId: req.params.columnId })
  flow.select(DEFAULT_PROJECTION)
  flow.skip(page * pageSize)
  flow.limit(pageSize)

  const text = await flow
    .catch((e: any): void => {
      console.log(e)
      throw new Error('getManyTextByColumnId error')
    })
  res.json({
    code: 0,
    text
  })
}

export const getManyTextByClassifyId = async function (req: any, res: any, next: any): Promise<any> {
  const { page = 0, pageSize = 10 } = req.body
  const flow = CourseTextModel.find({ classifyId: req.params.classifyId })
  flow.select(DEFAULT_PROJECTION)
  flow.skip(page * pageSize)
  flow.limit(pageSize)

  const text = await flow
    .catch((e: any): void => {
      console.log(e)
      throw new Error('getManyTextByClassifyId error')
    })
  res.json({
    code: 0,
    text
  })
}
