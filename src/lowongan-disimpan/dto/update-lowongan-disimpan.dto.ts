import { PartialType } from '@nestjs/mapped-types';
import { CreateLowonganDisimpanDto } from './create-lowongan-disimpan.dto';

export class UpdateLowonganDisimpanDto extends PartialType(CreateLowonganDisimpanDto) {}
