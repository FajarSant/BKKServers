/*
  Warnings:

  - A unique constraint covering the columns `[nisn]` on the table `Pengguna` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Pengguna_nisn_key" ON "Pengguna"("nisn");
