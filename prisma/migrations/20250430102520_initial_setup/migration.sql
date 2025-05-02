-- CreateEnum
CREATE TYPE "PeranPengguna" AS ENUM ('siswa', 'alumni', 'admin', 'hrd');

-- CreateEnum
CREATE TYPE "JenisPekerjaan" AS ENUM ('penuh_waktu', 'paruh_waktu', 'magang');

-- CreateEnum
CREATE TYPE "StatusLamaran" AS ENUM ('dikirim', 'ditinjau', 'wawancara', 'diterima', 'ditolak');

-- CreateTable
CREATE TABLE "Pengguna" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "kataSandi" TEXT NOT NULL,
    "peran" "PeranPengguna" NOT NULL,
    "telepon" TEXT,
    "dibuatPada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pengguna_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Perusahaan" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "situsWeb" TEXT,
    "logo" TEXT,
    "dibuatOlehId" INTEGER NOT NULL,
    "dibuatPada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Perusahaan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lowongan" (
    "id" SERIAL NOT NULL,
    "perusahaanId" INTEGER NOT NULL,
    "judul" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "syarat" TEXT NOT NULL,
    "gajiMinimal" INTEGER,
    "gajiMaksimal" INTEGER,
    "lokasi" TEXT NOT NULL,
    "jenisPekerjaan" "JenisPekerjaan" NOT NULL,
    "dipostingPada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "berakhirPada" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lowongan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lamaran" (
    "id" SERIAL NOT NULL,
    "penggunaId" INTEGER NOT NULL,
    "lowonganId" INTEGER NOT NULL,
    "fileCV" TEXT NOT NULL,
    "suratLamaran" TEXT,
    "status" "StatusLamaran" NOT NULL DEFAULT 'dikirim',
    "dilamarPada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lamaran_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pendidikan" (
    "id" SERIAL NOT NULL,
    "penggunaId" INTEGER NOT NULL,
    "institusi" TEXT NOT NULL,
    "jurusan" TEXT NOT NULL,
    "tahunMulai" INTEGER NOT NULL,
    "tahunLulus" INTEGER,

    CONSTRAINT "Pendidikan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pengalaman" (
    "id" SERIAL NOT NULL,
    "penggunaId" INTEGER NOT NULL,
    "namaPerusahaan" TEXT NOT NULL,
    "posisi" TEXT NOT NULL,
    "mulaiTanggal" TIMESTAMP(3) NOT NULL,
    "akhirTanggal" TIMESTAMP(3),
    "deskripsi" TEXT,

    CONSTRAINT "Pengalaman_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LowonganDisimpan" (
    "id" SERIAL NOT NULL,
    "penggunaId" INTEGER NOT NULL,
    "lowonganId" INTEGER NOT NULL,

    CONSTRAINT "LowonganDisimpan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pengguna_email_key" ON "Pengguna"("email");

-- AddForeignKey
ALTER TABLE "Perusahaan" ADD CONSTRAINT "Perusahaan_dibuatOlehId_fkey" FOREIGN KEY ("dibuatOlehId") REFERENCES "Pengguna"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lowongan" ADD CONSTRAINT "Lowongan_perusahaanId_fkey" FOREIGN KEY ("perusahaanId") REFERENCES "Perusahaan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lamaran" ADD CONSTRAINT "Lamaran_penggunaId_fkey" FOREIGN KEY ("penggunaId") REFERENCES "Pengguna"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lamaran" ADD CONSTRAINT "Lamaran_lowonganId_fkey" FOREIGN KEY ("lowonganId") REFERENCES "Lowongan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pendidikan" ADD CONSTRAINT "Pendidikan_penggunaId_fkey" FOREIGN KEY ("penggunaId") REFERENCES "Pengguna"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pengalaman" ADD CONSTRAINT "Pengalaman_penggunaId_fkey" FOREIGN KEY ("penggunaId") REFERENCES "Pengguna"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LowonganDisimpan" ADD CONSTRAINT "LowonganDisimpan_penggunaId_fkey" FOREIGN KEY ("penggunaId") REFERENCES "Pengguna"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LowonganDisimpan" ADD CONSTRAINT "LowonganDisimpan_lowonganId_fkey" FOREIGN KEY ("lowonganId") REFERENCES "Lowongan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
