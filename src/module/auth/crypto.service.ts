import { Injectable } from "@nestjs/common"
import * as Crypto from 'crypto'

@Injectable()
export class CryptoService {
  SALT_SIZE = 8
  ITARATIONS = 1200

  private generateSalt(size: number): Buffer {
    return Crypto.randomBytes(size)
  }

  private async pbkdf2(password: string, salt: Buffer): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      Crypto.pbkdf2(password, salt, this.ITARATIONS, 128, 'sha512', (err, key) => {
        if (err) { return reject(err) }

        resolve(key)
      })
    })
  }

  async hash(password: string): Promise<string> {
    const salt = this.generateSalt(this.SALT_SIZE)

    return Buffer.concat([salt, await this.pbkdf2(password, salt)])
      .toString('base64')
  }


  async compare(password: string, hash: string): Promise<boolean> {
    const hashBuffer = Buffer.from(hash, 'base64')

    const salt = hashBuffer.slice(0, this.SALT_SIZE)
    const digest = hashBuffer.slice(this.SALT_SIZE)

    if (!salt || !digest) {
      return Promise.reject(new Error("Invalid hash."))
    }

    return Buffer.compare(digest, await this.pbkdf2(password, salt)) === 0
  }
}