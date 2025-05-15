import { IsOptional, IsString, IsEmail } from 'class-validator';

export class UpdatePenggunaDto {
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
  tanggalLahir?: Date;

  @IsOptional()
  @IsString()
  jenisKelamin?: string;

  @IsOptional()
  @IsString()
  peran?: string;
}
