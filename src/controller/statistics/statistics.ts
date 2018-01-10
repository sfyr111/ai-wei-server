import { TextStatisticsModel, ColumnStatisticsModel, CommonPageStatisticsModel } from '../../models/statistics/statistics'
import * as moment from 'moment'

export const CountTextCourse = async function (req: any, res: any): Promise<void> {
  const d = moment(Date.now()).format('YYYY-MM-DD')
  const timestamp = new Date(d).valueOf() // 当天时间戳
  let todayCount
  todayCount = await TextStatisticsModel.findOne({ countDate: timestamp })
  if (!todayCount) todayCount = await TextStatisticsModel.create({})
  let pageCount = todayCount.pages.find((el: any) => el.textId === req.params.textId)
  if (!pageCount) {
    await todayCount.update({ $push: { pages: {
      textId: req.params.textId,
      shareCount: req.params.countType === 'share' ? 1 : 0,
      viewCount: req.params.countType === 'view' ? 1 : 0
    }}})
    await todayCount.save()
  } else {
    pageCount[`${req.params.countType}Count`]++
    await todayCount.save()
  }
  res.json({
    code: 0,
    msg: 'ok'
  })
}

export const CountColumnCourse = async function (req: any, res: any): Promise<void> {
  const d = moment(Date.now()).format('YYYY-MM-DD')
  const timestamp = new Date(d).valueOf() // 当天时间戳
  let todayCount
  todayCount = await ColumnStatisticsModel.findOne({ countDate: timestamp })
  if (!todayCount) todayCount = await ColumnStatisticsModel.create({})
  let pageCount = todayCount.pages.find((el: any) => el.columnId === req.params.columnId)
  if (!pageCount) {
    await todayCount.update({ $push: { pages: {
      columnId: req.params.columnId,
      shareCount: req.params.countType === 'share' ? 1 : 0,
      viewCount: req.params.countType === 'view' ? 1 : 0
    }}})
    await todayCount.save()
  } else {
    pageCount[`${req.params.countType}Count`]++
    await todayCount.save()
  }
  res.json({
    code: 0,
    msg: 'ok'
  })
}

export const CountCommonPage = async function (req: any, res: any): Promise<void> {
  const d = moment(Date.now()).format('YYYY-MM-DD')
  const timestamp = new Date(d).valueOf() // 当天时间戳
  let todayCount
  todayCount = await CommonPageStatisticsModel.findOne({ countDate: timestamp })
  if (!todayCount) todayCount = await CommonPageStatisticsModel.create({})
  let pageCount = todayCount.pages.find((el: any) => el.pageName === req.params.pageName)
  if (!pageCount) {
    await todayCount.update({ $push: { pages: {
      pageName: req.params.pageName,
      shareCount: req.params.countType === 'share' ? 1 : 0,
      viewCount: req.params.countType === 'view' ? 1 : 0
    }}})
    await todayCount.save()
  } else {
    pageCount[`${req.params.countType}Count`]++
    await todayCount.save()
  }
  res.json({
    code: 0,
    msg: 'ok'
  })
}

export const addCount = async function (req: any, res: any): Promise<void> {
  const d = moment(Date.now()).format('YYYY-MM-DD')
  const timestamp = new Date(d).valueOf() // 当天时间戳
  let Model
  if (req.params.countKey === 'textId') Model = TextStatisticsModel
  if (req.params.countKey === 'columnId') Model = ColumnStatisticsModel
  if (req.params.countKey === 'pageName') Model = CommonPageStatisticsModel
  let todayCount
  todayCount = await Model.findOne({ countDate: timestamp })
  if (!todayCount) todayCount = await Model.create({})
  let pageCount = todayCount.pages.find((el: any) => el[req.params.countKey] === req.params.countValue)
  if (!pageCount) {
    await todayCount.update({ $push: { pages: {
      [req.params.countKey]: req.params.countValue,
      shareCount: req.params.countType === 'share' ? 1 : 0,
      viewCount: req.params.countType === 'view' ? 1 : 0
    }}})
    await todayCount.save()
  } else {
    pageCount[`${req.params.countType}Count`]++
    await todayCount.save()
  }
  res.json({
    code: 0,
    msg: 'ok'
  })
}
