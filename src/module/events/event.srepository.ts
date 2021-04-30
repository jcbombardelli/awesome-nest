import { EntityRepository, Repository } from "typeorm";
import Event from "./event.entity";

@EntityRepository(Event)
export class EventsRepository extends Repository<Event> {


}
