import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto, AuthDto } from './dtos/auth.dto';
import { ForgotPasswordDto} from './dtos/forgot-password.dto';
import { ResetPasswordDto } from './dtos/reset-password.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  login(@Body() authDto: AuthDto) {
    return this.authService.login(authDto);
  }

  @Post('forgot-password')
  forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    return this.authService.forgotPassword(forgotPasswordDto.email);
  }

  @Post('reset-password')
  resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return this.authService.resetPassword(resetPasswordDto);
  }
}
