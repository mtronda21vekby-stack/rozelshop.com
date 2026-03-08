import { Controller, Get } from '@nestjs/common';

@Controller('catalog')
export class CatalogController {
  @Get('products')
  getProducts() {
    return {
      items: [],
      total: 0
    };
  }
}
