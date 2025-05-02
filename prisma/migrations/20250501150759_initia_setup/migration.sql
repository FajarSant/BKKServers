/*
  Warnings:

  - Made the column `nisn` on table `Pengguna` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Pengguna" ALTER COLUMN "nisn" SET NOT NULL;
