// src/expenses/dto/create-expense.dto.ts
import { IsNotEmpty, IsNumber, IsEnum, Min, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ExpenseCategory } from '../entities/expense.entity';

export class CreateExpenseDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  amount: number;

  @ApiProperty({ enum: ExpenseCategory })
  @IsEnum(ExpenseCategory)
  category: ExpenseCategory;
}