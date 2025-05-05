import { IsString, IsEmail, IsOptional, IsNotEmpty } from 'class-validator';

export class UpdatePerusahaanDto {
  @IsOptional()  
  @IsString()
  @IsNotEmpty({ message: 'Nama perusahaan wajib diisi.' })
  nama?: string;

  @IsOptional()  
  @IsString({ message: 'Gambar harus berupa string.' })
  gambar?: string;

  @IsOptional()  
  @IsString()
  @IsNotEmpty({ message: 'Alamat perusahaan wajib diisi.' })
  alamat?: string;

  @IsOptional() 
  @IsEmail({}, { message: 'Email tidak valid.' })
  @IsNotEmpty({ message: 'Email perusahaan wajib diisi.' })
  email?: string;

  @IsOptional() 
  @IsString({ message: 'Telepon harus berupa string.' })
  telepon?: string;

  @IsOptional() 
  @IsString({ message: 'Deskripsi harus berupa string.' })
  deskripsi?: string;
}
