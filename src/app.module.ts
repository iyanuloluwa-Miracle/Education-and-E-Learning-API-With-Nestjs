import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpenseModule } from './expense/expense.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';



@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ExpenseModule, AuthModule, UserModule], 
})
export class AppModule {}