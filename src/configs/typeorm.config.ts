import { TypeOrmModuleOptions } from '@nestjs/typeorm';


if (process.env.NODE_ENV === 'development') require('dotenv/config');

export const typeOrmConfig : TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
  entities: [`${__dirname}/..modules/**/*.entitiy.{js,ts}`],
  synchronize: Boolean(process.env.DATABASE_SYNC),
  logging: Boolean(process.env.DATABASE_LOGS),
  autoLoadEntities: true
}