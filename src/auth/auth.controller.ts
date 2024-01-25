import { Body, Controller, Post } from '@nestjs/common/';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-auth.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.createUser(createUserDto);
  }

 
}
