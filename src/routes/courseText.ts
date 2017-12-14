import * as express from 'express'
import * as CourseText from '../controller/courseText/courseText'

const router = express.Router()

// text
router.route('/')
  .get(CourseText.getAllText)

// 获取单个视频课程
router.route('/:id')
  .get(CourseText.getOneTextById)
  .post(CourseText.addReadCount) // 观看次数

// 播放完毕
router.route('/:id/user/:userId/finished')
  .post(CourseText.addFinishedUser)

router.route('/:id/user/:userId/agree')
  .post(CourseText.addAgreeCount) // 点赞数

// 获取某id专栏下的所有视频课程
router.route('/column/:columnId')
  .get(CourseText.getManyTextByColumnId)

// 获取某id分类下的所有视频课程
router.route('/classify/:classifyId')
  .get(CourseText.getManyTextByClassifyId)

export default router
