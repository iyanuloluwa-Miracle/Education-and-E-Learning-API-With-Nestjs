import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ExpensesModule } from './expenses/expenses.module';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [AuthModule, UsersModule, ExpensesModule], 
})
export class AppModule {}