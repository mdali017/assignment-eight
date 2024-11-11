import express from "express";
import { BorrowRecordController } from "./borrowRecord.controller";

const router = express.Router();

router.post("/borrow", BorrowRecordController.createBorrowRecord);

export const BorrowRecordRoutes = router;
