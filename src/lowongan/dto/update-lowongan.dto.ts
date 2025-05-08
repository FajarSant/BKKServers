// update-lowongan.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateLowonganDto } from './create-lowongan.dto';

export class UpdateLowonganDto extends PartialType(CreateLowonganDto) {}
