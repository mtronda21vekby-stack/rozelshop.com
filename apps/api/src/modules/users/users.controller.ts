import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('me')
  getMe() {
    return {
      id: 'seed-superadmin',
      email: 'internal@rozelshop.com',
      roles: ['superadmin']
    };
  }
}
