import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';


export default class SwaggerConfig {
  static init(app: INestApplication): void {

    const configs = new DocumentBuilder()
      .setTitle('Awesome NestJS')
      .setDescription('Endpoints for Application')
      .setVersion('1.0')
      .addBearerAuth()
      .build()

    const swaggerCustomOptions = {
      explorer: false,
    } as SwaggerCustomOptions

    const document = SwaggerModule.createDocument(app, configs)
    SwaggerModule.setup('docs', app, document, swaggerCustomOptions)
  }
}
