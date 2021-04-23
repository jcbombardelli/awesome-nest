import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import User from '../../module/users/user.entity';
import { UserRole } from '../../module/users/user.enum';
import { CryptoService } from '../../module/auth/crypto.service';

export default class Users implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const crypto = new CryptoService();

    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          email: 'michael.scott@dundermifflin.com',
          name: 'Michael Scott',
          password: await crypto.hash('threatlevelmidnight123'),
          role: UserRole.USER,
        }
      ]).execute()
  }
}
