import { IsNotEmpty, IsNumber, IsString, IsDate, IsEnum } from 'class-validator';
import { ExpenseCategory } from '../../common/enums/expense-category.enum';

export class CreateExpenseDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  amount: number;

  @IsDate()
  date: Date;

  @IsEnum(ExpenseCategory)
  category: ExpenseCategory;
}
