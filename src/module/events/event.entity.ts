import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import { EntityBase } from '../../base/entity.base'
import User from '../users/user.entity'

@Entity('event')
class Event extends EntityBase {


  @Column()
  public name: string

  @ManyToOne(() => User, user => user)
  public requester: User

  @OneToMany(() => User, user => user, { eager: true })
  public approvers: User[]

}

export default Event
