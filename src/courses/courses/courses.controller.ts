import { Controller, Get, Query } from '@nestjs/common';
import { HttpParams } from 'src/interfaces/http-params.interface';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
    constructor(private coursesService: CoursesService) {}

    @Get()
    getCourses(@Query() query: HttpParams) {
        return this.coursesService.getCourses(query);
    }
}
