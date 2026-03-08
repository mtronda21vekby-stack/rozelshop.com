import { Controller, Get } from '@nestjs/common';

@Controller('cms')
export class CmsController {
  @Get('home')
  getHomePage() {
    return {
      blocks: [
        {
          id: 'hero-1',
          type: 'hero',
          heading: 'ROZEL digital flagship'
        }
      ]
    };
  }
}
