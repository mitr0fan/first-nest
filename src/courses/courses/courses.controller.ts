import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CrudService } from 'src/crud/crud.service';
import { Course } from 'src/interfaces/course.interface';
import { HttpParams } from 'src/interfaces/http-params.interface';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
    constructor(private coursesService: CoursesService, private crud: CrudService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getCourses(@Query() query: HttpParams) {
        return this.crud.getList<Course>(query, this.coursesService.data);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async addCourse(@Body() body: Partial<Course>) {
        return this.crud.addToList<Course>(body, this.coursesService.data);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async getOne(@Param('id') id: string) {
        const course = await this.crud.getOne<Course>(+id, this.coursesService.data);

        if (!course) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        return course;
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    async editCourse(@Param('id') id: string, @Body() body: Partial<Course>) {
        body.id = +id;
        const edited = await this.crud.editOne<Course>(body, this.coursesService.data);

        if (!edited) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        return edited;
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async deleteCourse(@Param('id') id: string) {
        const removed = await this.crud.removeOne(+id, this.coursesService.data);

        if (!removed) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        return removed;
    }
}
