"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controllers_1 = require("./book.controllers");
const router = express_1.default.Router();
router.post("/books", book_controllers_1.BookController.createBook);
router.get("/books", book_controllers_1.BookController.getAllBooks);
router.get("/books/:id", book_controllers_1.BookController.getSingleBook);
router.put("/books/:id", book_controllers_1.BookController.updateBook);
router.delete("/books/:id", book_controllers_1.BookController.deleteBook);
exports.BookRoutes = router;
