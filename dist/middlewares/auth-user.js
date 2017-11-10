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
const JWT = require("jsonwebtoken");
const cipher_1 = require("../config/cipher");
const users_1 = require("../models/mongo/users");
function default_1(options) {
    return function (req, res, next) {
        (() => __awaiter(this, void 0, void 0, function* () {
            const auth = req.get('Authorization');
            if (!auth || auth.length < 2) {
                next(new Error('No auth1!'));
                return;
            }
            let authList = auth.split(' ');
            const token = authList[1];
            const obj = JWT.verify(token, cipher_1.JWT_SECRET);
            if (!obj || !obj._id || !obj.expire)
                throw new Error('No auth2!');
            if (Date.now() - obj.expire > 0)
                throw new Error('Token expired!');
            if (options.loadJWTUser)
                req.user = obj;
            if (options.loadUser)
                req.user = yield users_1.getUserById(obj._id);
        }))()
            .then(r => {
            next();
        })
            .catch(e => {
            res.statusCode = 401;
            next(e);
        });
    };
}
exports.default = default_1;
