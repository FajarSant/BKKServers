import { IsString, MinLength, IsNotEmpty } from 'class-validator';

export class ChangePasswordDto {
  @IsString()
  @IsNotEmpty()
  katasandilama: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: 'Kata sandi baru minimal 6 karakter.' })
  katasandibaru: string;
}
