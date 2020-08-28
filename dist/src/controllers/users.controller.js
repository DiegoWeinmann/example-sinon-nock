"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
var axios_1 = __importDefault(require("axios"));
var getUsers = function (req, res, next) {
    axios_1.default
        .get('https://jsonplaceholder.typicode.com/users/1')
        .then(function (response) {
        res.status(200).json({
            success: true,
            data: response.data,
        });
    })
        .catch(function (err) {
        res.status(400).json({
            success: false,
            error: 'error',
        });
    });
};
exports.getUsers = getUsers;
