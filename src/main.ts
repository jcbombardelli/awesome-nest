import { NestFactory } from '@nestjs/core'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { AppModule } from './app.module'
import SwaggerConfig from './configs/swagger.config'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())
  app.setGlobalPrefix('api')

  // Enable Swagger
  SwaggerConfig.init(app)

  // Enable Cors
  if (process.env.NODE_ENV === 'development')
    app.enableCors()


  await app.listen(
    process.env.PORT || 3000,
    process.env.HOST || '0.0.0.0')
}
bootstrap()
