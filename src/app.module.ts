import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CourseModule } from './course/course.module';
import { UserModule } from './user/user.module';
import { ProgressModule } from './progress/progress.module';
import { ToolsModule } from './tools/quiz.module';

@Module({
  imports: [AuthModule, CourseModule, UserModule, ProgressModule, ToolsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
