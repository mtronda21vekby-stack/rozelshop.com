import { Controller, Get } from '@nestjs/common';

@Controller('audit')
export class AuditController {
  @Get('ping')
  getAuditPing() {
    return {
      message: 'Audit module reserved for admin event trails.'
    };
  }
}
