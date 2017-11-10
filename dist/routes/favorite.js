"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Favorite = require("../controller/favorite/favorite");
const router = express.Router();
// /favorite
// 获取所有收藏，不管用户
router.route('/')
    .get(Favorite.getAllColumnWithFavorite);
// 获取当前用户收藏
router.route('/user/:userId')
    .get(Favorite.getManyColumnWithFavoriteByUserId);
// 收藏
router.route('/:id/user/:userId')
    .post(Favorite.createOneColumnWithFavoriteByUserId)
    .delete(Favorite.deleteOneColumnWithFavoriteById);
// 删除
// router.route('/:id/user/:userId')
//   .delete(Favorite.deleteOneColumnWithFavoriteById)
exports.default = router;
