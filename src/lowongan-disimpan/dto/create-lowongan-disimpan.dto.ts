import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateLowonganDisimpanDto {
  @IsInt()
  @IsNotEmpty()
  penggunaId: number;

  @IsInt()
  @IsNotEmpty()
  lowonganId: number;
}
