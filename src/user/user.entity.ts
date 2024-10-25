import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Course } from '../course/course.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: 'student' })
  role: 'student' | 'instructor' | 'admin';

  @OneToMany(() => Course, (course) => course.instructor)
  courses: Course[];
}
