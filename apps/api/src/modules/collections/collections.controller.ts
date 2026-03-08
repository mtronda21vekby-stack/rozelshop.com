import { Controller, Get } from '@nestjs/common';

@Controller('collections')
export class CollectionsController {
  @Get()
  getCollections() {
    return {
      items: [
        {
          id: 'noir-volume',
          title: 'Noir Volume'
        }
      ],
      total: 1
    };
  }
}
