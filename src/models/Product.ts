import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ type: 'varchar' })
  name!: string

  @Column({ type: 'text', nullable: true })
  description!: string

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price!: number

  @Column({ type: 'int' })
  inventory!: number
}
