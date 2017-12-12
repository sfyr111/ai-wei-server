import * as express from 'express'
import * as CourseVideo from '../controller/courseVideo/courseVideo'

const router = express.Router()

// video
router.route('/')
  .get(CourseVideo.getAllVideo)

// 获取单个视频课程
router.route('/:id')
  .get(CourseVideo.getOneVideoById)
  .post(CourseVideo.addPlayCount) // 播放次数

// 获取某id专栏下的所有视频课程
router.route('/column/:columnId')
  .get(CourseVideo.getManyVideoByColumnId)
// 获取某id分类下的所有视频课程
router.route('/classify/:classifyId')
  .get(CourseVideo.getManyVideoByClassifyId)

export default router
