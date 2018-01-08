"use strict";
exports.__esModule = true;
var express = require("express");
var Statistics = require("../controller/statistics/statistics");
var router = express.Router();
// statistics
router.route('/');
// .get(Statistics.getAllStatistics)
/**
 * @title 统计分享和浏览次数, 三类, 文章、专栏、普通页面, 文章、专栏存id, 普通页面存页面名
 * @params countType: 1.share 2.view
 * @params countKey: 1.textId 2.columnId 3.pageName
 * @params countValue: 1.ObjectId 2.[index, hot, ...]
 */
router.route('/:countType/:countKey/:countValue')
    .post(Statistics.addCount);
// router.route('/:countType/textCourseId/:textId')
//   .post(Statistics.CountTextCourse)
// router.route('/:countType/columnCourseId/:columnId')
//   .post(Statistics.CountColumnCourse)
// router.route('/:countType/commonPage/:pageName')
//   .post(Statistics.CountCommonPage)
exports["default"] = router;
