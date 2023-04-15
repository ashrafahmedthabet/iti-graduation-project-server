import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import * as express from 'express';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));
  app.use(cookieParser());

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
