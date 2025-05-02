export interface JwtPayload {
  email: string;
  nisn?: string;
  sub: number;
  loginAt?: string;
}
