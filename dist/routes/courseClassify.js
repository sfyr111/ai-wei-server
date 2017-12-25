"use strict";
exports.__esModule = true;
var express = require("express");
var CourseClassify = require("../controller/courseClassify/courseClassify");
var router = express.Router();
// classify
router.route('/')
    .get(CourseClassify.getAllClassify);
router.route('/:id')
    .get(CourseClassify.getClassifyById);
exports["default"] = router;
