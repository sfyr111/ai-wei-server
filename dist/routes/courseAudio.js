"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const CourseAudio = require("../controller/courseAudio/courseAudio");
const router = express.Router();
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
exports.default = router;
