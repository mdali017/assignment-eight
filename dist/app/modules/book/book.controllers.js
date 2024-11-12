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
exports.BookController = void 0;
const book_service_1 = require("./book.service");
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_service_1.BookService.createBookIntoDB(req.body);
        res.send({
            success: true,
            statusCode: 201,
            message: "Book created successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_service_1.BookService.getAllBooksFromDB();
        res.send({
            success: true,
            statusCode: 200,
            message: "Get All Books fetched successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getSingleBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_service_1.BookService.getSingleBookFromDB(req.params.id);
        res.send({
            success: true,
            statusCode: 200,
            message: "Get Single Book fetched successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
        res.status(404).send({ message: "Book not found" });
    }
});
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_service_1.BookService.updateBookIntoDB(req.params.id, req.body);
        res.send({
            success: true,
            statusCode: 200,
            message: "Book updated successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
        res.status(404).send({ message: "Book not found" });
    }
});
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_service_1.BookService.deleteBookFromDB(req.params.id);
        res.send({
            success: true,
            statusCode: 200,
            message: "Book deleted successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
        res.status(404).send({ message: "Book not found" });
    }
});
exports.BookController = {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook,
};
