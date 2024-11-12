// controller
import { Request, Response } from "express";
import { BorrowRecordService } from "./borrowRecord.service";

const createBorrowRecord = async (req: Request, res: Response) => {
  try {
    const result = await BorrowRecordService.createBorrowRecordIntoDB(req.body);
    res.send({
      success: true,
      statusCode: 201,
      message: "Borrow Record created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      statusCode: 500,
      message: "Failed to create borrow record",
    });
  }
};

// Return a Book
const returnBook = async (req: Request, res: Response) => {
  try {
    const { borrowId } = req.body;
    const result = await BorrowRecordService.returnBookIntoDB(borrowId);
    res.send({
      success: true,
      status: 200,
      message: "Book returned successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      status: 500,
      message: "Failed to return book",
    });
  }
};

export const BorrowRecordController = { createBorrowRecord, returnBook };
