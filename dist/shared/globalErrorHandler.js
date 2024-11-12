"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message;
    let error = err;
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
        error,
    });
};
exports.default = globalErrorHandler;
