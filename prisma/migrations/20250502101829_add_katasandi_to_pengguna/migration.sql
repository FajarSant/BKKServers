/*
  Warnings:

  - You are about to drop the column `kataSandi` on the `Pengguna` table. All the data in the column will be lost.
  - Added the required column `katasandi` to the `Pengguna` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pengguna" DROP COLUMN "kataSandi",
ADD COLUMN     "katasandi" TEXT NOT NULL;
