require('dotenv')

module.exports = {
  type: process.env.DATABASE_TYPE || 'mysql',
  host: process.env.DATABASE_HOST || '0.0.0.0',
  port: Number(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USER || 'root',
  password: process.env.DATABASE_PASS || 'development',
  database: process.env.DATABASE_NAME || 'saas',
  entities: [`${__dirname}/../**/*.entity.{ts,js}`],
  synchronize: false,
  autoLoadEntities: false,
  migrationsTableName: 'migration',
  migrations: ['src/db/migrations/**/*.ts'],
  subscribers: ['src/db/subscribers/**/*.ts'],
  factories: ['src/db/factories/**/*{.ts,.js}'],
  seeds: ['src/db/seeds/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/db/migrations',
    subscribersDir: 'src/db/subscribers',
  },
  logging: true,
}
