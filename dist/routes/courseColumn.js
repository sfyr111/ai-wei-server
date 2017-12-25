"use strict";
exports.__esModule = true;
var express = require("express");
var CourseColumn = require("../controller/courseColumn/courseColumn");
var router = express.Router();
// 获取所有专栏，不区分类别
router.route('/')
    .get(CourseColumn.getAllCloumn);
// 获取所有热门课程
router.route('/popular')
    .get(CourseColumn.getPopularCloumn);
// 获取某id分类下的所有专栏
router.route('/classify/:classifyId')
    .get(CourseColumn.getManyCloumnByClassifyId);
// 获取单个专栏信息
router.route('/:id')
    .get(CourseColumn.getOneCloumnById);
exports["default"] = router;
