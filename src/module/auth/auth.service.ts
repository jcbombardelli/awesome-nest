import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { AuthRepository } from './auth.repository'
import User from '../users/user.entity'
import { CryptoService } from './crypto.service'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(AuthRepository) private authRepository: AuthRepository,
    private jwtService: JwtService,
    private cryptoService: CryptoService) { }

  async login(user: User): Promise<any> {

    const payload = {
      sub: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    }

    return {
      auth: true,
      token: this.jwtService.sign(payload)
    }
  }

  async authenticate(email: string, password: string): Promise<Partial<User>> {
    const user = await this.authRepository.findUserByEmail(email)
    if (!(user && await this.cryptoService.compare(password, user.password))) {
      return null;
    }

    const { password: _, ...allowedFields } = user;
    return allowedFields;
  }
}
