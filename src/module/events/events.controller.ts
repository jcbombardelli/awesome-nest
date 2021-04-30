import { Body, Controller, Request, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/auth.guard';
import { CreateEventRequestDTO } from './event.dto';
import { EventsService } from './events.service';
import Event from './event.entity'
import { ApiBearerAuth, ApiBody, ApiResponse } from '@nestjs/swagger';

import { User } from '../../utils/decorators/user.decorator';


@Controller('events')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class EventsController {
  constructor(private readonly eventsService: EventsService) { }


  @Post()
  @ApiBody({ type: CreateEventRequestDTO })
  @ApiResponse({ type: Event })
  async createEvent(
    @User() user: any,
    @Body() createEventDTO: CreateEventRequestDTO): Promise<Event> {

    const result = await this.eventsService.createNewEvent(user.sub, createEventDTO)
    return result
  }


}
