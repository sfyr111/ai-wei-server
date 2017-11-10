"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const CourseClassify = require("../controller/courseClassify/courseClassify");
const router = express.Router();
// classify
router.route('/')
    .get(CourseClassify.getAllClassify);
router.route('/:id')
    .get(CourseClassify.getClassifyById);
exports.default = router;
