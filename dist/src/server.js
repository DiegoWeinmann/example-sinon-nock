"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var morgan_1 = __importDefault(require("morgan"));
var app = express_1.default();
var PORT = 3000;
var url = 'https://jsonplaceholder.typicode.com/users/1';
app.use(express_1.default.json());
app.use(morgan_1.default('dev'));
app.use('/', routes_1.usersRouter);
app.listen(PORT, function () {
    console.log("Server listening on port " + PORT);
});
