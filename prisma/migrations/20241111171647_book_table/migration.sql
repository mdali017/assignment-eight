-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "publishedYear" TIMESTAMP(3) NOT NULL,
    "availableCopies" INTEGER NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
