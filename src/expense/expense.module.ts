import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpensesService } from './expense.service';
import { ExpensesController } from './expense.controller';
import { Expense } from './entities/expense.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Expense])],
  providers: [ExpensesService],
  controllers: [ExpensesController],
})
export class ExpenseModule {}
