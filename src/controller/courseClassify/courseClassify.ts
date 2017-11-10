import CourseClassifyModel from '../../models/courseClassify/courseClassify'

const DEFAULT_PROJECTION = { __v: 0 }

export const getAllClassify = async function (req: any, res: any, next: any): Promise<any> {
  const { page = 0, pageSize = 10 } = req.body
  const flow = CourseClassifyModel.find({})
  flow.select(DEFAULT_PROJECTION)
  flow.skip(page * pageSize)
  flow.limit(pageSize)

  const classify = await flow
    .catch((e: any): void => {
      console.log(e)
      throw new Error('getAllClassify error')
    })
  res.json({
    code: 0,
    classify
  })
}

export const getClassifyById = async function (req: any, res: any, next: any): Promise<any> {
  const flow = CourseClassifyModel.find({ _id: req.params.id })
  flow.select(DEFAULT_PROJECTION)

  const classify = await flow
    .catch((e: any): void => {
      console.log(e)
      throw new Error('getClassifyById error')
    })
  res.json({
    code: 0,
    classify
  })
}
