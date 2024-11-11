// src/expenses/dto/update-expense.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreateExpenseDto } from './create-expense.dto';

export class UpdateExpenseDto extends PartialType(CreateExpenseDto) {}