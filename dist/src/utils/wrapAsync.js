"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapAsync = void 0;
exports.wrapAsync = function (promise) {
    return promise
        .then(function (result) { return ({ ok: true, result: result, error: undefined }); })
        .catch(function (error) {
        return Promise.resolve({ ok: false, result: undefined, error: error });
    });
};
