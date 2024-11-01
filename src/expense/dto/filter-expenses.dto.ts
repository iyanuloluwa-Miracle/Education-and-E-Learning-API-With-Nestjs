import { IsOptional, IsDate, IsEnum } from 'class-validator';
import { ExpenseCategory } from '../../common/enums/expense-category.enum';

export class FilterExpensesDto {
  @IsOptional()
  @IsDate()
  startDate?: Date;

  @IsOptional()
  @IsDate()
  endDate?: Date;

  @IsOptional()
  @IsEnum(ExpenseCategory)
  category?: ExpenseCategory;
}
