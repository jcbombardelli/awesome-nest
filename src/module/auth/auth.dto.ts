import { ApiProperty } from '@nestjs/swagger';

export class LoginRequestDTO {
  @ApiProperty({
    description: 'We usually pass email as username.',
    default: 'michaelscott@michaelscottpappercompany.com'
  })
  username: string;

  @ApiProperty({
    description: "It's necessary explain that? xD",
    default: 'a1s2d3f4g5h6'
  })
  password: string;
}


export class LoginResponseDTO {

  @ApiProperty({
    description: 'Result auth',
    default: 'false',
  })
  auth: boolean;

  @ApiProperty({
    description: "Token string"
  })
  token: string;
}
