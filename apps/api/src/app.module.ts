import { Module } from '@nestjs/common';
import { AuditModule } from './modules/audit/audit.module';
import { AuthModule } from './modules/auth/auth.module';
import { CmsModule } from './modules/cms/cms.module';
import { CollectionsModule } from './modules/collections/collections.module';
import { HealthModule } from './modules/health/health.module';
import { CatalogModule } from './modules/catalog/catalog.module';
import { SettingsModule } from './modules/settings/settings.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [HealthModule, AuthModule, UsersModule, CatalogModule, CollectionsModule, CmsModule, SettingsModule, AuditModule]
})
export class AppModule {}
