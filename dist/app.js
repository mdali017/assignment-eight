"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const book_routes_1 = require("./app/modules/book/book.routes");
const member_routes_1 = require("./app/modules/member/member.routes");
const borrowRecord_routes_1 = require("./app/modules/borrowRecord/borrowRecord.routes");
const globalErrorHandler_1 = __importDefault(require("./shared/globalErrorHandler"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api", book_routes_1.BookRoutes);
app.use("/api", member_routes_1.MemberRoutes);
app.use("/api", borrowRecord_routes_1.BorrowRecordRoutes);
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Welcome to library management system",
    });
});
app.use(globalErrorHandler_1.default);
exports.default = app;
