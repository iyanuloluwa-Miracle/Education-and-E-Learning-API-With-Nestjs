import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { RegisterDto, AuthDto } from './dtos/auth.dto';
import { ForgotPasswordDto} from './dtos/forgot-password.dto';
import { ResetPasswordDto } from './dtos/reset-password.dto'
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private userService: UserService) {}

  async register(registerDto: RegisterDto) {
    const user = await this.userService.create(registerDto);
    const token = this.jwtService.sign({ id: user.id, email: user.email });
    return { token };
  }

  async login(authDto: AuthDto) {
    const user = await this.userService.findByEmail(authDto.email);
    if (!user || !(await bcrypt.compare(authDto.password, user.password))) {
      throw new BadRequestException('Invalid credentials');
    }
    const token = this.jwtService.sign({ id: user.id, email: user.email });
    return { token };
  }

  async forgotPassword(email: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new BadRequestException('Invalid email');
    }
    const token = this.jwtService.sign({ id: user.id });
    // Send email with the token to reset password (Configure mailer)
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto) {
    const payload = this.jwtService.verify(resetPasswordDto.token);
    const user = await this.userService.findById(payload.id);
    const hashedPassword = await bcrypt.hash(resetPasswordDto.newPassword, 10);
    await this.userService.updatePassword(user.id, hashedPassword);
  }
}
