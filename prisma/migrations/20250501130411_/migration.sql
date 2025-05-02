/*
  Warnings:

  - The values [hrd] on the enum `PeranPengguna` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `Lamaran` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Lowongan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LowonganDisimpan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pendidikan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pengalaman` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Perusahaan` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "JenisKelamin" AS ENUM ('laki_laki', 'perempuan');

-- AlterEnum
BEGIN;
CREATE TYPE "PeranPengguna_new" AS ENUM ('siswa', 'alumni', 'admin');
ALTER TABLE "Pengguna" ALTER COLUMN "peran" TYPE "PeranPengguna_new" USING ("peran"::text::"PeranPengguna_new");
ALTER TYPE "PeranPengguna" RENAME TO "PeranPengguna_old";
ALTER TYPE "PeranPengguna_new" RENAME TO "PeranPengguna";
DROP TYPE "PeranPengguna_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Lamaran" DROP CONSTRAINT "Lamaran_lowonganId_fkey";

-- DropForeignKey
ALTER TABLE "Lamaran" DROP CONSTRAINT "Lamaran_penggunaId_fkey";

-- DropForeignKey
ALTER TABLE "Lowongan" DROP CONSTRAINT "Lowongan_perusahaanId_fkey";

-- DropForeignKey
ALTER TABLE "LowonganDisimpan" DROP CONSTRAINT "LowonganDisimpan_lowonganId_fkey";

-- DropForeignKey
ALTER TABLE "LowonganDisimpan" DROP CONSTRAINT "LowonganDisimpan_penggunaId_fkey";

-- DropForeignKey
ALTER TABLE "Pendidikan" DROP CONSTRAINT "Pendidikan_penggunaId_fkey";

-- DropForeignKey
ALTER TABLE "Pengalaman" DROP CONSTRAINT "Pengalaman_penggunaId_fkey";

-- DropForeignKey
ALTER TABLE "Perusahaan" DROP CONSTRAINT "Perusahaan_dibuatOlehId_fkey";

-- AlterTable
ALTER TABLE "Pengguna" ADD COLUMN     "alamat" TEXT,
ADD COLUMN     "jenisKelamin" "JenisKelamin",
ADD COLUMN     "nisn" TEXT,
ADD COLUMN     "tanggalLahir" TIMESTAMP(3);

-- DropTable
DROP TABLE "Lamaran";

-- DropTable
DROP TABLE "Lowongan";

-- DropTable
DROP TABLE "LowonganDisimpan";

-- DropTable
DROP TABLE "Pendidikan";

-- DropTable
DROP TABLE "Pengalaman";

-- DropTable
DROP TABLE "Perusahaan";

-- DropEnum
DROP TYPE "JenisPekerjaan";

-- DropEnum
DROP TYPE "StatusLamaran";
