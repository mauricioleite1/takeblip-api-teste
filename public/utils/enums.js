"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpStatusCode;
(function (httpStatusCode) {
    httpStatusCode[httpStatusCode["OK"] = 200] = "OK";
    httpStatusCode[httpStatusCode["CREATED"] = 201] = "CREATED";
    httpStatusCode[httpStatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    httpStatusCode[httpStatusCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    httpStatusCode[httpStatusCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(httpStatusCode || (httpStatusCode = {}));
exports.default = httpStatusCode;
