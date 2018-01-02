"use strict";
exports.__esModule = true;
var express = require("express");
var CourseText = require("../controller/courseText/courseText");
var router = express.Router();
// text
router.route('/')
    .get(CourseText.getAllText);
// 获取单个文本课程
router.route('/:id')
    .get(CourseText.getOneTextById)
    .post(CourseText.addReadCount); // 观看次数
router.route('/:id/share')
    .post(CourseText.addShareCount); // 分享数
router.route('/:id/agree')
    .post(CourseText.addAgreeCount); // 点赞数
// 播放完毕
router.route('/:id/user/:userId/finished')
    .post(CourseText.addFinishedUser);
// router.route('/:id/user/:userId/agree')
//   .post(CourseText.addAgreeCount) // 点赞数 by users.length
// 获取某id专栏下的所有视频课程
router.route('/column/:columnId')
    .get(CourseText.getManyTextByColumnId);
// 获取某id分类下的所有视频课程
router.route('/classify/:classifyId')
    .get(CourseText.getManyTextByClassifyId);
exports["default"] = router;
