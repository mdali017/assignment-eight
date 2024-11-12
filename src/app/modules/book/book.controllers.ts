import { NextFunction, Request, Response } from "express";
import { BookService } from "./book.service";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BookService.createBookIntoDB(req.body);
    res.send({
      success: true,
      statusCode: 201,
      message: "Book created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BookService.getAllBooksFromDB();
    res.send({
      success: true,
      statusCode: 200,
      message: "Get All Books fetched successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await BookService.getSingleBookFromDB(req.params.id);
    res.send({
      success: true,
      statusCode: 200,
      message: "Get Single Book fetched successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BookService.updateBookIntoDB(req.params.id, req.body);
    res.send({
      success: true,
      statusCode: 200,
      message: "Book updated successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BookService.deleteBookFromDB(req.params.id);
    res.send({
      success: true,
      statusCode: 200,
      message: "Book deleted successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const BookController = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
