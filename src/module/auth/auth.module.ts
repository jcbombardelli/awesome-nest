import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

import { jwtConfig } from 'src/configs/jwt.config';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy/local.strategy';
import { CryptoService } from './crypto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthRepository } from './auth.repository';

@Module({
  imports: [
    PassportModule,
    JwtModule.register(jwtConfig()),
    TypeOrmModule.forFeature([AuthRepository])
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, CryptoService],
  exports: [AuthService],
})
export class AuthModule { }