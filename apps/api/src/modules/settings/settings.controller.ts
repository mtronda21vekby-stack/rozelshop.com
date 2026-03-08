import { Controller, Get } from '@nestjs/common';

@Controller('settings')
export class SettingsController {
  @Get('public')
  getPublicSettings() {
    return {
      brandName: 'ROZEL',
      siteUrl: process.env.SITE_URL ?? 'http://localhost:3000'
    };
  }
}
