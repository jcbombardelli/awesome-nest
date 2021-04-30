import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventsRepository } from './event.srepository';
import Event from './event.entity'
import User from '../users/user.entity';

@Injectable()
export class EventsService {
  constructor(@InjectRepository(EventsRepository) private readonly eventsRepository: EventsRepository) { }

  async createNewEvent(requesterId: string, event: Partial<Event>): Promise<Event> {

    const user = new User()
    user.id = requesterId
    event.requester = user

    const result = await this.eventsRepository.save(event)
    return result
  }


}
