
import {
  IsString,
  IsOptional,
  IsEmail,
  IsDateString,
  IsEnum,
} from 'class-validator';
import { PeranPengguna, JenisKelamin } from '@prisma/client';

export class UpdateProfileDto {
  @IsOptional()
  @IsString()
  nama?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  katasandi?: string; 

  @IsOptional()
  @IsString()
  nisn?: string;

  @IsOptional()
  @IsString()
  alamat?: string;

  @IsOptional()
  @IsString()
  telepon?: string;

  @IsOptional()
  @IsDateString()
  tanggalLahir?: Date;

  @IsOptional()
  @IsEnum(JenisKelamin)
  jenisKelamin?: JenisKelamin;
}