import { Module } from '@nestjs/common';
import { AuthorsService } from './authors/authors.service';
import { AuthorsController } from './authors/authors.controller';
import { CrudService } from 'src/crud/crud.service';

@Module({
  providers: [AuthorsService, CrudService],
  controllers: [AuthorsController]
})
export class AuthorsModule {}
