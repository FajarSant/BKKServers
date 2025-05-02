// src/auth/dto/login.dto.ts
import { IsString, Matches, MinLength } from 'class-validator';

export class LoginDto {
  @IsString({ message: 'NISN harus berupa string.' })
  @Matches(/^\d+$/, { message: 'NISN harus berupa angka.' }) 
  nisn: string;

  @IsString({ message: 'Password harus berupa string.' })
  @MinLength(6, { message: 'Password minimal 6 karakter.' })
  password: string;
}
