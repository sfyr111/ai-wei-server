"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const User = require("../controller/user/user");
const router = express.Router();
// /user
router.route('/')
    .get(User.getUsers);
router.route('/:id')
    .get(User.getUserById);
// 收藏
router.route('/:userId/favorite')
    .get(User.getFavoriteColumns);
router.route('/:userId/favorite/:id')
    .post(User.addFavoriteColumn)
    .delete(User.deleteFavoriteColumn);
// 历史
router.route('/:userId/history')
    .get(User.getHistoryColumns);
router.route('/:userId/history/:id')
    .post(User.addHistoryColumn)
    .delete(User.deleteHistoryColumn);
exports.default = router;
