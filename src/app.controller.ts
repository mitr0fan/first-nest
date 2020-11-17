import {
    Body,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Options,
    Param,
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
    constructor(
        private authService: AuthService,
        private userService: UserService
    ) {}

    @Post('register')
    async register(@Body() body: Partial<User>) {
        const user = await this.authService.register(body);

        if (!user) {
            throw new HttpException(
                'User with that email already exist',
                HttpStatus.BAD_REQUEST
            );
        }
        const { access_token } = await this.authService.login(body);
        return {
            user,
            access_token,
        };
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(
        @Body() body: Partial<User>
    ): Promise<{ user: Partial<User>; access_token: string }> {
        const { access_token } = await this.authService.login(body);

        const user = await this.authService.validateUser(
            body.email,
            body.password
        );

        return {
            user,
            access_token,
        };
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('users/:id')
    async getProfile(@Param() params: { id: string }) {
        const user = await this.userService.findOneById(+params.id);

        if (!user) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }

        const { password, ...result } = user;
        return result;
    }

    // Unable CORS
    @Options('*')
    async options() {
        return true;
    }
}
