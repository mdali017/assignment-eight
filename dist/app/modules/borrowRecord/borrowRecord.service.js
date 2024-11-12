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
exports.BorrowRecordService = void 0;
const prisma_1 = require("../../../shared/prisma");
const createBorrowRecordIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const borrowRecord = yield prisma_1.prisma.borrowRecord.create({ data: payload });
    return borrowRecord;
});
// for return book
const returnBookIntoDB = (borrowId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const borrowRecord = yield prisma_1.prisma.borrowRecord.update({
            where: { borrowId },
            data: { returnDate: new Date() }, // Set the current date as returnDate
        });
        return borrowRecord;
    }
    catch (error) {
        console.error("Error returning book:", error);
        throw new Error("Failed to return book");
    }
});
exports.BorrowRecordService = {
    createBorrowRecordIntoDB,
    returnBookIntoDB,
};
