// src/auth/jwt-payload.interface.ts
export interface JwtPayload {
  sub: number;
  email: string;
  peran: 'siswa' | 'alumni' | 'admin';
}
