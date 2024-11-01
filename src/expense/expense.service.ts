import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from './entities/expense.entity';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { FilterExpensesDto } from './dto/filter-expenses.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(Expense)
    private expensesRepository: Repository<Expense>,
  ) {}

  async create(createExpenseDto: CreateExpenseDto, user: User): Promise<Expense> {
    const expense = this.expensesRepository.create({ ...createExpenseDto, user });
    return this.expensesRepository.save(expense);
  }

  async findAll(filterExpensesDto: FilterExpensesDto, user: User): Promise<Expense[]> {
    const { startDate, endDate, category } = filterExpensesDto;
    const query = this.expensesRepository.createQueryBuilder('expense');
    query.where('expense.userId = :userId', { userId: user.id });

    if (startDate) {
      query.andWhere('expense.date >= :startDate', { startDate });
    }

    if (endDate) {
      query.andWhere('expense.date <= :endDate', { endDate });
    }

    if (category) {
      query.andWhere('expense.category = :category', { category });
    }

    return query.getMany();
  }

  async findOne(id: string, user: User): Promise<Expense> {
    const expense = await this.expensesRepository.findOneBy({ id, user });
    if (!expense) throw new NotFoundException('Expense not found');
    return expense;
  }

  async update(
    id: string,
    updateExpenseDto: UpdateExpenseDto,
    user: User,
  ): Promise<Expense> {
    const expense = await this.findOne(id, user);
    Object.assign(expense, updateExpenseDto);
    return this.expensesRepository.save(expense);
  }

  async remove(id: string, user: User): Promise<void> {
    const expense = await this.findOne(id, user);
    await this.expensesRepository.remove(expense);
  }
}
