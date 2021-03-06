import * as express from 'express'
import * as Banner from '../controller/banner/banner'

const router = express.Router()

// text
router.route('/')
  .get(Banner.getAllBanner)

router.route('/:id')
  .get(Banner.getBannerById)

export default router
