import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
// decorator are functions in ORM ( The keywords that use @ as prefix are decorators)

@Entity()
class Employee extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  first_name: string

  @Column()
  last_name: string

  @Column()
  title: string

  @Column()
  email: string

  @Column()
  date_of_birth: Date

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}