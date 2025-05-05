import { SetMetadata } from '@nestjs/common';
import { PeranPengguna } from 'src/common/enums/peran.enum';

export const PERAN_KEY = 'peran';
export const Peran = (...roles: PeranPengguna[]) => SetMetadata(PERAN_KEY, roles);
