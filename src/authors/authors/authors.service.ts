import { Injectable } from '@nestjs/common';
import { Author } from 'src/interfaces/author.interface';

@Injectable()
export class AuthorsService {
    data: Author[] = [
        {
            firstName: 'Георгий',
            lastName: 'Бодрый',
            fullName: 'Георгий Бодрый',
            id: 1,
        },
        {
            firstName: 'Василий',
            lastName: 'Интересный',
            fullName: 'Василий Интересный',
            id: 2,
        },
        {
            firstName: 'Максим',
            lastName: 'Лучший',
            fullName: 'Максим Лучший',
            id: 3,
        },
        {
            firstName: 'Георгий',
            lastName: 'Уставший',
            fullName: 'Георгий Уставший',
            id: 4,
        },
        {
            firstName: 'Василий',
            lastName: 'Неинтересный',
            fullName: 'Василий Неинтересный',
            id: 5,
        },
        {
            firstName: 'Максим',
            lastName: 'Худший',
            fullName: 'Максим Худший',
            id: 6,
        },
    ];
}
