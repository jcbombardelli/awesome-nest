import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EventsController } from './events.controller'
import { EventsService } from './events.service'
import { EventsRepository } from './event.srepository'

@Module({
  imports: [TypeOrmModule.forFeature([EventsRepository])],
  controllers: [EventsController],
  providers: [EventsService],
  exports: []
})
export class EventsModule { }
