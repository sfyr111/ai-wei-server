"use strict";
exports.__esModule = true;
var express = require("express");
var Banner = require("../controller/banner/banner");
var router = express.Router();
// text
router.route('/')
    .get(Banner.getAllBanner);
router.route('/:id')
    .get(Banner.getBannerById);
exports["default"] = router;
