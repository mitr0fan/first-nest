import { Injectable } from '@nestjs/common';
import { Course } from 'src/interfaces/course.interface';

@Injectable()
export class CoursesService {
    data: Course[] = [
        {
            title: 'JavaScript',
            description:
                'JavaScript — мультипарадигменный язык программирования. ',
            date: 1580587200000,
            duration: 11160000,
            authors: [
                {
                    firstName: 'Георгий',
                    lastName: 'Бодрый',
                    fullName: 'Георгий Бодрый',
                    id: 1,
                },
            ],
            topRated: false,
            id: 1,
        },
        {
            title: 'Video Course 2',
            description:
                'The best course ever!!!!! The best course ever!!!!! The best course ever!!!!! The best course ever!!!!! The best course ever!!!!!',
            date: 1578168000000,
            duration: 2100000,
            authors: [
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
            ],
            topRated: true,
            id: 2,
        },
        {
            title: 'Hello',
            description: 'World',
            date: 1607976000000,
            duration: 9960000,
            authors: [
                {
                    firstName: 'Георгий',
                    lastName: 'Бодрый',
                    fullName: 'Георгий Бодрый',
                    id: 1,
                },
                {
                    firstName: 'Максим',
                    lastName: 'Лучший',
                    fullName: 'Максим Лучший',
                    id: 3,
                },
            ],
            topRated: false,
            id: 3,
        },
        {
            title: 'Бабочки',
            description:
                'Разнокрылые (лат. Heteroneura) — инфраотряд бабочек, в котором сосредоточено 99 % современных видов. У взрослых насекомых различается жилкование передней и задней пар крыльев. Сестринская группа для разнокрылых — инфраотряд Exoporia, в который входят тонкопряды.',
            date: 1580500800000,
            duration: 12000000,
            authors: [
                {
                    firstName: 'Максим',
                    lastName: 'Лучший',
                    fullName: 'Максим Лучший',
                    id: 3,
                },
            ],
            topRated: false,
            id: 4,
        },
        {
            title: 'World',
            description: 'Hello',
            date: 1539547200000,
            duration: 3300000,
            authors: [
                {
                    firstName: 'Василий',
                    lastName: 'Неинтересный',
                    fullName: 'Василий Неинтересный',
                    id: 5,
                },
            ],
            topRated: false,
            id: 6,
        },
        {
            title: 'Angular',
            description: 'How to make an app ',
            date: 1609444800000,
            duration: 5820000,
            authors: [
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
            ],
            topRated: false,
            id: 7,
        },
    ];
}
