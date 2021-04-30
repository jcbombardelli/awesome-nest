import { ApiProperty } from '@nestjs/swagger';


export class CreateEventRequestDTO {

  @ApiProperty()
  name: string

}

export class CreateEventResponseDTO {

}

export interface ApproveEventDTO {
  id: string
}
