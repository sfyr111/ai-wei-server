import * as express from 'express'
import * as CourseText from '../controller/courseText/courseText'

const router = express.Router()

// text
router.route('/')
  .get(CourseText.getAllText)

// 获取单个视频课程
router.route('/:id')
  .get(CourseText.getOneTextById)

// 获取某id专栏下的所有视频课程
router.route('/column/:columnId')
  .get(CourseText.getManyTextByColumnId)

// 获取某id分类下的所有视频课程
router.route('/classify/:classifyId')
  .get(CourseText.getManyTextByClassifyId)

export default router
