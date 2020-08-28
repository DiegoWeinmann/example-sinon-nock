"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
var express_1 = require("express");
var controllers_1 = require("../controllers");
var usersRouter = express_1.Router();
exports.usersRouter = usersRouter;
usersRouter.get('/users', controllers_1.getUsers);
