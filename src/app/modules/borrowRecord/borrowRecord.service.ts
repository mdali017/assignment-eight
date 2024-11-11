import { prisma } from "../../../shared/prisma";

const createBorrowRecordIntoDB = async (payload: any) => {
  const borrowRecord = await prisma.borrowRecord.create({ data: payload });
  return borrowRecord;
};

export const BorrowRecordService = {
  createBorrowRecordIntoDB,
};
