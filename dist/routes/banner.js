"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Banner = require("../controller/banner/banner");
const router = express.Router();
// text
router.route('/')
    .get(Banner.getAllBanner);
exports.default = router;
