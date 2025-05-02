// src/auth/dto/login.dto.ts
import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  nisn: string;

  @IsNotEmpty()
  katasandi: string;
}
