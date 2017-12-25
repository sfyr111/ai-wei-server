"use strict";
exports.__esModule = true;
var express = require("express");
var CourseAudio = require("../controller/courseAudio/courseAudio");
var router = express.Router();
// 获取所有专栏，不区分类别
router.route('/')
    .get(CourseAudio.getAllAudio);
// 获取单个音频课程
router.route('/:id')
    .get(CourseAudio.getOneAudioById);
// 获取某id专栏下的所有音频课程
router.route('/column/:columnId')
    .get(CourseAudio.getManyAudioByColumnId);
// 获取某id分类下的所有音频课程
router.route('/classify/:classifyId')
    .get(CourseAudio.getManyAudioByClassifyId);
exports["default"] = router;
