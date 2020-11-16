import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [AuthModule, UserModule, CoursesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
