import { JwtModuleOptions } from '@nestjs/jwt'

export const jwtConfig = (): JwtModuleOptions => {
  return {
    secret: process.env.JWT_SECRET || '1234567890',
    signOptions: {
      algorithm: 'HS256',
      expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    }
  }
}