import {
    Body,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Post,
    Request,
    UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth/auth.service';
import { User } from './interfaces/user.interface';
import { UserService } from './user/user/user.service';

@Controller()
export class AppController {
    constructor(private authService: AuthService, private userService: UserService) { }

    @Get()
    main() {
        return 'Hello';
    }

    @Post('register')
    async register(@Body() body: Partial<User>) {
        const user = await this.authService.register(body);

        if (!user) {
            throw new HttpException(
                'User with that email already exist',
                HttpStatus.BAD_REQUEST,
            );
        }
        return user;
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Body() body: Partial<User>): Promise<{ access_token: string }> {
        return this.authService.login(body);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    async getProfile(@Request() req) {
        const { password, ...result } = await this.userService.findOne(req.user.email);
        return result;
    }
}
