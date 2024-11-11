/*
  Warnings:

  - Added the required column `totalCopies` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `publishedYear` on the `Book` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "totalCopies" INTEGER NOT NULL,
DROP COLUMN "publishedYear",
ADD COLUMN     "publishedYear" INTEGER NOT NULL;
