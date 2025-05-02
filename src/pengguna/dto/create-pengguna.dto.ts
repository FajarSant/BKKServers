import {
    IsEmail,
    IsEnum,
    IsOptional,
    IsString,
    Length,
    MinLength,
  } from 'class-validator';
  import { JenisKelamin, PeranPengguna } from '@prisma/client';
  
  export class CreatePenggunaDto {
    @IsString()
    nama: string;
  
    @IsEmail()
    email: string;
  
    @MinLength(6)
    katasandi: string;
  
    @IsEnum(PeranPengguna)
    peran: PeranPengguna;
  
    @IsString()
    nisn: string;
  
    @IsOptional()
    @IsString()
    alamat?: string;
  
    @IsOptional()
    @IsString()
    telepon?: string;
  
    @IsOptional()
    tanggalLahir?: Date;
  
    @IsOptional()
    @IsEnum(JenisKelamin)
    jenisKelamin?: JenisKelamin;
  }
  