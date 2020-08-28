"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var test = {
    prop: 'true',
};
describe('users.controller', function () {
    it('test1', function () {
        chai_1.expect(test).to.eql({ test: 'true' });
    });
});
