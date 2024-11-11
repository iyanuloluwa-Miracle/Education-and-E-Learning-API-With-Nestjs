// src/expenses/expenses.controller.ts
import { Controller, Post, Get, Param, Delete, Body, UseGuards, Req } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { Expense } from './entities/expense.entity';
import { User } from '../users/entities/user.entity';

@ApiTags('expenses')
@ApiBearerAuth()
@Controller('expenses')
@UseGuards(JwtAuthGuard)
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Expense successfully created' })
  async create(
    @Body() createExpenseDto: CreateExpenseDto,
    @GetUser() user: User,
  ): Promise<Expense> {
    return this.expensesService.create(createExpenseDto, user);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'List of user expenses' })
  async findAll(@GetUser() user: User): Promise<Expense[]> {
    return this.expensesService.findAllByUser(user.id);
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Expense details' })
  async findOne(@Param('id') id: string, @GetUser() user: User): Promise<Expense> {
    return this.expensesService.findOne(id, user.id);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Expense successfully deleted' })
  async remove(@Param('id') id: string, @GetUser() user: User): Promise<void> {
    return this.expensesService.remove(id, user.id);
  }
}