import * as express from 'express'
import * as CourseColumn from '../controller/courseColumn/courseColumn'

const router = express.Router()

// 获取所有专栏，不区分类别
router.route('/')
  .get(CourseColumn.getAllCloumn)

// 获取所有热门课程
router.route('/popular')
  .get(CourseColumn.getPopularCloumn)

// 获取某id分类下的所有专栏
router.route('/classify/:classifyId')
  .get(CourseColumn.getManyCloumnByClassifyId)

// 获取单个专栏信息
router.route('/:id')
  .get(CourseColumn.getOneCloumnById)

router.route('/:id/share')
  .post(CourseColumn.addShareCount) // 分享数

export default router
