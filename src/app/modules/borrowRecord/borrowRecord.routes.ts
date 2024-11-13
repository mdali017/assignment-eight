import express from "express";
import { BorrowRecordController } from "./borrowRecord.controller";

const router = express.Router();

router.post("/borrow", BorrowRecordController.createBorrowRecord);
router.post("/return", BorrowRecordController.returnBook);


// router.get("/overdue", BorrowRecordController.getOverdueBorrowList);  // Todo

export const BorrowRecordRoutes = router;
