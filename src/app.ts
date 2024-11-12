import express, { Application, Request, Response } from "express";
import cors from "cors";
import { BookRoutes } from "./app/modules/book/book.routes";
import { MemberRoutes } from "./app/modules/member/member.routes";
import { BorrowRecordRoutes } from "./app/modules/borrowRecord/borrowRecord.routes";
import globalErrorHandler from "./shared/globalErrorHandler";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", BookRoutes);
app.use("/api", MemberRoutes);
app.use("/api", BorrowRecordRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Welcome to library management system",
  });
});

app.use(globalErrorHandler);

export default app;
