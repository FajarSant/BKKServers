-- CreateEnum
CREATE TYPE "JenisPekerjaan" AS ENUM ('magang', 'paruh_waktu', 'penuh_waktu', 'freelance', 'kontrak');

-- CreateTable
CREATE TABLE "Perusahaan" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "gambar" TEXT,
    "alamat" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telepon" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "Perusahaan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lamaran" (
    "id" SERIAL NOT NULL,
    "penggunaId" INTEGER NOT NULL,
    "lowonganId" INTEGER NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "waktuPelamaran" TIMESTAMP(3),

    CONSTRAINT "Lamaran_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lowongan" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "ketentuan" TEXT NOT NULL,
    "persyaratan" TEXT NOT NULL,
    "salary" TEXT,
    "jenisPekerjaan" "JenisPekerjaan" NOT NULL,
    "perusahaanId" INTEGER NOT NULL,
    "dibuatPada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiredAt" TIMESTAMP(3),
    "linkPendaftaran" TEXT,

    CONSTRAINT "Lowongan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LowonganDisimpan" (
    "id" SERIAL NOT NULL,
    "penggunaId" INTEGER NOT NULL,
    "lowonganId" INTEGER NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LowonganDisimpan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Perusahaan_email_key" ON "Perusahaan"("email");

-- AddForeignKey
ALTER TABLE "Lamaran" ADD CONSTRAINT "Lamaran_penggunaId_fkey" FOREIGN KEY ("penggunaId") REFERENCES "Pengguna"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lamaran" ADD CONSTRAINT "Lamaran_lowonganId_fkey" FOREIGN KEY ("lowonganId") REFERENCES "Lowongan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lowongan" ADD CONSTRAINT "Lowongan_perusahaanId_fkey" FOREIGN KEY ("perusahaanId") REFERENCES "Perusahaan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LowonganDisimpan" ADD CONSTRAINT "LowonganDisimpan_penggunaId_fkey" FOREIGN KEY ("penggunaId") REFERENCES "Pengguna"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LowonganDisimpan" ADD CONSTRAINT "LowonganDisimpan_lowonganId_fkey" FOREIGN KEY ("lowonganId") REFERENCES "Lowongan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
