import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { LoginRequestDTO, LoginResponseDTO } from './auth.dto';
import { LocalAuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }


    @Post('login')
    @UseGuards(LocalAuthGuard)
    @ApiBody({ type: LoginRequestDTO })
    @ApiResponse({
        type: LoginResponseDTO,
        description: "Authentication route return a token",
        status: 200
    })
    @ApiResponse({
        description: "Username or password is incorrect",
        status: 401,

    })
    async login(@Request() req: any): Promise<any> {
        return this.authService.login(req.user)
    }

}
