import { subDays } from "date-fns";
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


// Fetch overdue borrow records : TODO
// const getOverdueBorrowListFromDB = async () => {
//   const overdueDate = subDays(new Date(), 14); // 14-day return policy

//   const overdueRecords = await prisma.borrowRecord.findMany({
//     where: {
//       dueDate: { lt: overdueDate },
//       returnDate: null, // Only fetch records where the book hasn't been returned
//     },
//     select: {
//       borrowId: true,
//       book: { select: { title: true } },
//       borrower: { select: { name: true } },
//       dueDate: true,
//       borrowDate: true,
//     },
//   });

//   // Calculate overdue days for each record
//   const overdueList = overdueRecords.map((record) => ({
//     borrowId: record.borrowId,
//     bookTitle: record.book.title,
//     borrowerName: record.borrower.name,
//     overdueDays: Math.floor((new Date().getTime() - record.dueDate.getTime()) / (1000 * 60 * 60 * 24)),
//   }));

//   return overdueList;
// };

export const BorrowRecordService = {
  createBorrowRecordIntoDB,
  returnBookIntoDB,
};
