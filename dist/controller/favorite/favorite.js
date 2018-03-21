"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const favorite_1 = require("../../models/favorite/favorite");
const DEFAULT_PROJECTION = { __v: 0 };
exports.createOneColumnWithFavoriteByUserId = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        // const column = new FavoriteColumnModel({
        //   name: req.body.name,
        //   creator: req.params.userId, // 收藏的用户
        //   classifyId: req.body.classifyId,
        //   classifyName: req.body.classifyName,
        //   introduction: req.body.introduction, // 简介
        //   subtitle: req.body.subtitle, // 子标题
        //   popular: req.body.popular, // 是否热门课程
        //   backgroundUrl: req.body.backgroundUrl, // 专栏详情背景图片
        //   imgUrl: req.body.imgUrl, // 专栏标题图片
        //   lastCourse: req.body.lastCourse, // 最新课程的name
        // })
        const column = new favorite_1.default({
            creator: req.params.userId,
            columnId: req.params.id
        });
        const created = yield column.save()
            .catch((e) => {
            console.log(e);
            throw new Error('createOneColumnWithFavoriteByUserId error');
        });
        res.json({
            code: 0,
            created
        });
    });
};
exports.getAllColumnWithFavorite = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { page = 0, pageSize = 30 } = req.body;
        const flow = favorite_1.default.find({});
        flow.select(DEFAULT_PROJECTION);
        // flow.skip(page * pageSize);
        // flow.limit(pageSize);
        const columns = yield flow
            .catch((e) => {
            console.log(e);
            throw new Error('getAllColumnWithFavorite error');
        });
        res.json({
            code: 0,
            columns
        });
    });
};
exports.getManyColumnWithFavoriteByUserId = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const flow = favorite_1.default.find({ creator: req.params.userId });
        flow.select(DEFAULT_PROJECTION);
        const favoriteColumns = yield flow
            .catch((e) => {
            console.log(e);
            throw new Error('getManyColumnWithFavoriteByUserId error');
        });
        console.log(favoriteColumns);
        const findIdArr = favoriteColumns.map((item) => {
            return item.columnId;
        });
        console.log(findIdArr);
        res.json({
            code: 0,
            favoriteColumns
        });
        // const findIdArr: number[] = favoriteColumns.map((item: any): any => {
        //   return item.columnId
        // })
        // const filterFindarr = findIdArr.filter(item => {
        //   return (item.toString().trim() !== 'undefined')
        // })
        // if (filterFindarr.length < 1) {
        //   res.json({
        //     code: 0,
        //     columns: []
        //   })
        // }
        // const columns = await CourseColumn.find({ '_id': { $in: filterFindarr } })
        //
        // res.json({
        //   code: 0,
        //   columns
        // })
    });
};
exports.deleteOneColumnWithFavoriteById = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const deleted = yield favorite_1.default.findOneAndRemove({ $and: [{ columnId: req.params.id }, { creator: req.params.userId }] })
            .catch((e) => {
            console.log(e);
            throw new Error('deleteOneColumnWithFavoriteById error');
        });
        res.json({
            code: 0,
            deleted
        });
    });
};
