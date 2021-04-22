import { NestFactory } from '@nestjs/core'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())
  app.setGlobalPrefix('api')

  // eslint-disable-next-line prettier/prettier
  await app.listen(
    process.env.PORT || 3000, 
    process.env.HOST || '0.0.0.0')
}
bootstrap()
