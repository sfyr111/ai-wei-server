import CourseAudioModel from '../../models/courseAudio/courseAudio'

const DEFAULT_PROJECTION = { __v: 0 }

export const getAllAudio = async function (req: any, res: any, next: any): Promise<any> {
  const { page = 0, pageSize = 10 } = req.body
  const flow = CourseAudioModel.find({})
  flow.select(DEFAULT_PROJECTION)
  flow.skip(page * pageSize)
  flow.limit(pageSize)

  const audio = await flow
    .catch((e: any): void => {
      console.log(e)
      throw new Error('getAllAudio error')
    })
  res.json({
    code: 0,
    audio
  })
}

export const getOneAudioById = async function (req: any, res: any, next: any): Promise<any> {
  const flow = CourseAudioModel.find({ _id: req.params.id })
  flow.select(DEFAULT_PROJECTION)

  const audio = await flow
    .catch((e: any): void => {
      console.log(e)
      throw new Error('getOneAudioById error')
    })
  res.json({
    code: 0,
    audio
  })
}

export const getManyAudioByColumnId = async function (req: any, res: any, next: any): Promise<any> {
  const { page = 0, pageSize = 10 } = req.body
  const flow = CourseAudioModel.find({ columnId: req.params.columnId })
  flow.select(DEFAULT_PROJECTION)
  flow.skip(page * pageSize)
  flow.limit(pageSize)

  const audio = await flow
    .catch((e: any): void => {
      console.log(e)
      throw new Error('getManyAudioByColumnId error')
    })
  res.json({
    code: 0,
    audio
  })
}

export const getManyAudioByClassifyId = async function (req: any, res: any, next: any): Promise<any> {
  const { page = 0, pageSize = 10 } = req.body
  const flow = CourseAudioModel.find({ classifyId: req.params.classifyId })
  flow.select(DEFAULT_PROJECTION)
  flow.skip(page * pageSize)
  flow.limit(pageSize)

  const audio = await flow
    .catch((e: any): void => {
      console.log(e)
      throw new Error('getManyAudioByClassifyId error')
    })
  res.json({
    code: 0,
    audio
  })
}
