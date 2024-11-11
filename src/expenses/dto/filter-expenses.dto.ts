// src/expenses/dto/filter-expenses.dto.ts
import { IsOptional, IsEnum, IsString, IsDate, IsNumber } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { ExpenseCategory } from '../entities/expense.entity'

export class FilterExpensesDto {
  @ApiPropertyOptional({ enum: ExpenseCategory })
  @IsOptional()
  @IsEnum(ExpenseCategory)
  category?: ExpenseCategory;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  minAmount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  maxAmount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDate()
  startDate?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDate()
  endDate?: Date;
}