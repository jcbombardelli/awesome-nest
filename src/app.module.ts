import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { serveStaticConfig } from './configs/servestatic.config';
import { typeOrmConfig } from './configs/typeorm.config';
import { AuthModule } from './module/auth/auth.module';
import { EventsModule } from './module/events/events.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ServeStaticModule.forRoot(serveStaticConfig),
    AuthModule,
    EventsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
