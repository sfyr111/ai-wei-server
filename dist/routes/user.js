"use strict";
exports.__esModule = true;
var express = require("express");
var User = require("../controller/user/user");
var router = express.Router();
// /user
router.route('/')
    .get(User.getUsers);
router.route('/:id')
    .get(User.getUserById);
router.route('/openId/:userId')
    .get(User.getUserByOpenId);
// 收藏
router.route('/:userId/favorite')
    .get(User.getFavoriteColumns);
router.route('/:userId/favorite/:id')
    .post(User.addFavoriteColumn)["delete"](User.deleteFavoriteColumn);
// 历史
router.route('/:userId/history')
    .get(User.getHistoryColumns);
router.route('/:userId/history/:id')
    .post(User.addHistoryColumn)["delete"](User.deleteHistoryColumn);
exports["default"] = router;
