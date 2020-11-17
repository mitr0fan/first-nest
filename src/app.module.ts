import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CoursesModule } from './courses/courses.module';
import { AuthorsModule } from './authors/authors.module';
import { CrudService } from './crud/crud.service';

@Module({
  imports: [AuthModule, UserModule, CoursesModule, AuthorsModule],
  controllers: [AppController],
  providers: [CrudService],
})
export class AppModule {}
