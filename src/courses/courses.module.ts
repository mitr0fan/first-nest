import { Module } from '@nestjs/common';
import { CrudService } from 'src/crud/crud.service';
import { CoursesController } from './courses/courses.controller';
import { CoursesService } from './courses/courses.service';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService, CrudService]
})
export class CoursesModule {}
