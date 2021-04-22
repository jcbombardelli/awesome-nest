import { Column, Entity } from 'typeorm'
import { EntityBase } from '../../base/entity.base'
import { UserRole } from './user.enum'

@Entity('users')
class User extends EntityBase {
  @Column({ unique: true })
  public email: string

  @Column()
  public name: string

  @Column()
  public password: string

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  public role: UserRole
}

export default User
