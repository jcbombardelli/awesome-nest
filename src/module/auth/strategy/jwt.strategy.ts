import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConfig } from 'src/configs/jwt.config';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: jwtConfig().secret,
		});
	}

	async validate(payload: any): Promise<any> {
		return payload
	}
}
