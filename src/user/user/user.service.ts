import { Injectable } from '@nestjs/common';
import { DATA } from 'src/data';
import { User } from 'src/interfaces/user.interface';

@Injectable()
export class UserService {
    async findOne(email: string): Promise<User> {
        return DATA.users.find(i => i.email === email);
    }

    async create(data: Partial<User>): Promise<Partial<User>> {
        let id = DATA.users
            .map(i => i.id)
            .reduce((prev, curr) => curr > prev ? curr : prev, -1);
        let user = new UserInfo(data);
        user.id = ++id;
        DATA.users.push(user);
        const { password, ...result } = user;
        return result;
    }
}

class UserInfo implements User {
    email: string;
    password: string;
    id: number;
    firstName: string;
    lastName: string;

    constructor(data: Partial<User>) {
        this.email = data.email;
        this.password = data.password;
        this.id = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
    }
}
