"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowRecordController = void 0;
const borrowRecord_service_1 = require("./borrowRecord.service");
const createBorrowRecord = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield borrowRecord_service_1.BorrowRecordService.createBorrowRecordIntoDB(req.body);
        res.send({
            success: true,
            statusCode: 201,
            message: "Borrow Record created successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
// Return a Book
const returnBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { borrowId } = req.body;
        const result = yield borrowRecord_service_1.BorrowRecordService.returnBookIntoDB(borrowId);
        res.send({
            success: true,
            status: 200,
            message: "Book returned successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.BorrowRecordController = { createBorrowRecord, returnBook };
