// create-lowongan.dto.ts
import { IsNotEmpty, IsOptional, IsString, IsEnum, IsInt, IsDateString } from 'class-validator';
import { JenisPekerjaan } from '@prisma/client'; // Import enum dari Prisma jika sudah di-generate

export class CreateLowonganDto {
  @IsNotEmpty({ message: 'Nama lowongan tidak boleh kosong.' })
  @IsString()
  nama: string;

  @IsNotEmpty({ message: 'Ketentuan wajib diisi.' })
  @IsString()
  ketentuan: string;

  @IsNotEmpty({ message: 'Persyaratan wajib diisi.' })
  @IsString()
  persyaratan: string;

  @IsOptional()
  @IsString()
  salary?: string;

  @IsNotEmpty({ message: 'Jenis pekerjaan harus dipilih.' })
  @IsEnum(JenisPekerjaan) // Menggunakan enum dari Prisma
  jenisPekerjaan: JenisPekerjaan;

  @IsNotEmpty({ message: 'Perusahaan wajib dipilih.' })
  @IsInt()
  perusahaanId: number;

  @IsOptional()
  @IsDateString()
  expiredAt?: string;

  @IsOptional()
  @IsString()
  linkPendaftaran?: string;
}
