import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CmsService } from './cms.service';
import {
  PublicContentQueryDto,
  UpdateSiteContentDto
} from './dto/update-site-content.dto';
import { UpsertProductDto } from './dto/upsert-product.dto';

@Controller('cms')
export class CmsController {
  constructor(private readonly cmsService: CmsService) {}

  @Get('public/content')
  getPublicContent(@Query() query: PublicContentQueryDto) {
    return this.cmsService.getPublicContent(query);
  }

  @Patch('admin/content')
  updateSiteContent(
    @Body() dto: UpdateSiteContentDto,
    @Headers('x-admin-key') adminKey?: string
  ) {
    return this.cmsService.updateSiteContent(dto, adminKey);
  }

  @Get('public/products')
  getPublicProducts(@Query('locale') locale?: 'ru' | 'en') {
    return this.cmsService.getPublicProducts(locale === 'en' ? 'en' : 'ru');
  }

  @Get('admin/products')
  getAdminProducts(@Headers('x-admin-key') adminKey?: string) {
    return this.cmsService.getAdminProducts(adminKey);
  }

  @Post('admin/products')
  upsertProduct(
    @Body() dto: UpsertProductDto,
    @Headers('x-admin-key') adminKey?: string
  ) {
    return this.cmsService.upsertProduct(dto, adminKey);
  }

  @Delete('admin/products/:id')
  deleteProduct(
    @Param('id') id: string,
    @Headers('x-admin-key') adminKey?: string
  ) {
    return this.cmsService.deleteProduct(id, adminKey);
  }

  @Post('admin/upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Query('folder') folder?: string,
    @Headers('x-admin-key') adminKey?: string
  ) {
    return this.cmsService.uploadImage(file, folder || 'cms', adminKey);
  }
}
