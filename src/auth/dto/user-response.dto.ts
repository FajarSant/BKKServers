import { PeranPengguna, JenisKelamin } from '@prisma/client';

export class UserResponseDto {
  id: number;
  nama: string;
  email: string;
  peran: PeranPengguna;
  nisn: string;
  alamat: string | null;
  telepon: string | null;
  tanggalLahir: Date | null;
  jenisKelamin: JenisKelamin | null;
  dibuatPada: Date;
}
