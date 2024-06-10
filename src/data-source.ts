import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Product } from './models/Product'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  synchronize: true,
  logging: false,
  entities: [Product],
  migrations: [],
  subscribers: []
})
