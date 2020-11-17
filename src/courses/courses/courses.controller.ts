import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Course } from 'src/interfaces/course.interface';
import { HttpParams } from 'src/interfaces/http-params.interface';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
    constructor(private coursesService: CoursesService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getCourses(@Query() query: HttpParams) {
        return this.coursesService.getCourses(query);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async addCourse(@Body() body: Partial<Course>) {
        return this.coursesService.addCourse(body);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async getOne(@Param('id') id: string) {
        const course = await this.coursesService.getOne(+id);

        if (!course) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        return course;
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    async editCourse(@Param('id') id: string, @Body() body: Partial<Course>) {
        body.id = +id;
        const edited = await this.coursesService.editCourse(body);

        if (!edited) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        return edited;
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async deleteCourse(@Param('id') id: string) {
        const removed = await this.coursesService.removeCourse(+id);

        if (!removed) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        return removed;
    }
}
