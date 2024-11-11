import { prisma } from "../../../shared/prisma";

const createBookIntoDB = async (payload: any) => {
  const book = await prisma.book.create({ data: payload });
  return book;
};

const getAllBooksFromDB = async () => {
  const books = await prisma.book.findMany({});
  return books;
};

const getSingleBookFromDB = async (id: string) => {
  const book = await prisma.book.findUnique({ where: { id } });
  return book;
};

const updateBookIntoDB = async (id: string, payload: any) => {
  const book = await prisma.book.update({ where: { id }, data: payload });
  return book;
};

const deleteBookFromDB = async (id: string) => {
  const book = await prisma.book.delete({ where: { id } });
  return book;
};

export const BookService = {
  createBookIntoDB,
  getAllBooksFromDB,
  getSingleBookFromDB,
  updateBookIntoDB,
  deleteBookFromDB,
};
