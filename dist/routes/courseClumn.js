"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const CourseColumn = require("../controller/courseColumn/courseColumn");
const router = express.Router();
router.route('/')
    .get(CourseColumn.getAllClumn);
router.route('/:id')
    .get(CourseColumn.getClassifyById);
exports.default = router;
