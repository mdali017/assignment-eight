// controller
import { NextFunction, Request, Response } from "express";
import { BorrowRecordService } from "./borrowRecord.service";

const createBorrowRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await BorrowRecordService.createBorrowRecordIntoDB(req.body);
    res.send({
      success: true,
      statusCode: 201,
      message: "Borrow Record created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// Return a Book
const returnBook = async (req: Request, res: Response, next: NextFunction) => {
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
    next(err);
  }
};

// // Get Overdue Borrow List : TODO
// const getOverdueBorrowList = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const result = await BorrowRecordService.getOverdueBorrowListFromDB();
//     res.status(200).json({
//       success: true,
//       status: 200,
//       message: "Overdue borrow list fetched",
//       data: result,
//     });
//   } catch (err) {
//     next(err);
//   }
// };




export const BorrowRecordController = { createBorrowRecord, returnBook };
