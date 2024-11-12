import { prisma } from "../../../shared/prisma";

const createBorrowRecordIntoDB = async (payload: any) => {
  const borrowRecord = await prisma.borrowRecord.create({ data: payload });
  return borrowRecord;
};

// for return book
const returnBookIntoDB = async (borrowId: string) => {
  try {
    const borrowRecord = await prisma.borrowRecord.update({
      where: { borrowId },
      data: { returnDate: new Date() }, // Set the current date as returnDate
    });
    return borrowRecord;
  } catch (error) {
    console.error("Error returning book:", error);
    throw new Error("Failed to return book");
  }
};

export const BorrowRecordService = {
  createBorrowRecordIntoDB,
  returnBookIntoDB,
};
