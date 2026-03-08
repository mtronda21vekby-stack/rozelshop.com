import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

function parseOrigins(value?: string): string[] {
  if (!value) return ['http://localhost:3000', 'http://localhost:3001'];
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.enableCors({
    origin: parseOrigins(process.env.CORS_ORIGIN),
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  const port = Number(process.env.PORT || 4000);
  await app.listen(port);

  console.log(`ROZEL API running on http://localhost:${port}/api`);
}

bootstrap();
