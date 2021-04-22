import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  BaseEntity
} from 'typeorm'

export abstract class EntityBase extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'boolean', default: true, nullable: false })
  public isActive: boolean

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  public updatedAt?: Date

  public constructor() {
    super()
    this.isActive = true
    this.createdAt = new Date()
    this.updatedAt = new Date()
  }
}