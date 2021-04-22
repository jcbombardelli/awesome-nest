import { EntityRepository, Repository } from 'typeorm';
import User from '../users/user.entity';


@EntityRepository(User)
export class AuthRepository extends Repository<User> {
  
  async findUserByEmail(email: string): Promise<User> {
    return this.findOne({ email })
  }
}
