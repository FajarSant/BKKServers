import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PenggunaService } from './pengguna/pengguna.service';
import { PenggunaModule } from './pengguna/pengguna.module';
import { PerusahaanModule } from './perusahaan/perusahaan.module';
import { LowonganModule } from './lowongan/lowongan.module';

@Module({
  imports: [
    AuthModule,

    PrismaModule,

    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'), 
        signOptions: {
          expiresIn: configService.get<string>('JWT_EXPIRATION'), 
        },
      }),
    }),

    ConfigModule.forRoot(),

    PenggunaModule,

    PerusahaanModule,

    LowonganModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, PenggunaService], 
})
export class AppModule {}
