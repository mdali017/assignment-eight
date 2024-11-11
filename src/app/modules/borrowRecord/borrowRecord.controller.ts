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
  }
};

export const BorrowRecordController = { createBorrowRecord };
