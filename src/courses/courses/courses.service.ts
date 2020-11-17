import { Injectable } from '@nestjs/common';
import { Author } from 'src/interfaces/author.interface';
import { Course } from 'src/interfaces/course.interface';
import { HttpParams } from 'src/interfaces/http-params.interface';

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

    async getCourses(query: HttpParams): Promise<Course[]> {
        const offset = +query.offset || 0;
        const limit = +query.limit || Infinity;

        return this.data.filter((i, index) => index >= offset && index < offset + limit);
    }

    async getOne(id: number) {
        return this.data.find(i => i.id === id);
    }

    async addCourse(course: Partial<Course>) {
        let id = this.data
            .map((i) => i.id)
            .reduce((prev, curr) => (curr > prev ? curr : prev), -1);

        course.id = ++id;
        this.data.push(new CourseInfo(course));
        return course;
    }

    async removeCourse(id: number) {
        const index = this.data.findIndex(i => i.id === id);


        if (index || index === 0) {
            return this.data.splice(index, 1);
        } else {
            return null;
        }
    }

    async editCourse(edited: Partial<Course>) {
        const index = this.data.findIndex(i => i.id === edited.id);

        if (index || index === 0) {
            return this.data[index] = {...this.data[index], ...edited};
        } else {
            return null;
        }
    }

}

class CourseInfo implements Course {
    id: number = null;
    title: string = null;
    date: string | number = null;
    duration: number = null;
    description: string = null;
    topRated: boolean = false;
    authors: Author[] = [];

    constructor(data: Partial<Course>) {
        Object.entries(data)
            .forEach(([key, value]) => {
                this[key] = value;
            });
    }
}
