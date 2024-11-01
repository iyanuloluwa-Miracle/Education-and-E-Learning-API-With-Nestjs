import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { ExpenseCategory } from '../../common/enums/expense-category.enum';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column('decimal')
  amount: number;

  @Column()
  date: Date;

  @Column({
    type: 'enum',
    enum: ExpenseCategory,
    default: ExpenseCategory.Others,
  })
  category: ExpenseCategory;

  @ManyToOne(() => User, (user) => user.expenses, { eager: false })
  user: User;
}
