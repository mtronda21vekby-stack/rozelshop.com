import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  login(payload: LoginDto) {
    return {
      ok: true,
      message: 'Auth foundation ready. Replace with real identity workflow.',
      user: {
        email: payload.email,
        role: 'superadmin'
      }
    };
  }

  session() {
    return {
      authenticated: false,
      user: null
    };
  }
}
