import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/interfaces/user.interface';
import { UserService } from 'src/user/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {}

    async validateUser(email: string, pass: string): Promise<Partial<User>> {
        const user = await this.userService.findOne(email);

        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }

        return null;
    }

    async register(credentials: Partial<User>): Promise<Partial<User>> {
        if (await this.userService.findOne(credentials.email)) {
            return null;
        }

        return this.userService.create(credentials);
    }

    async login(user: Partial<User>) {
        const payload = { email: user.email, sub: user.id };

        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
