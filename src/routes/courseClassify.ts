import * as express from 'express'
import * as CourseClassify from '../controller/courseClassify/courseClassify'

const router = express.Router()
// classify
router.route('/')
  .get(CourseClassify.getAllClassify)

router.route('/:id')
  .get(CourseClassify.getClassifyById)

export default router
