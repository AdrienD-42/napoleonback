import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,        // supprime les propriétés non définies dans le DTO
        forbidNonWhitelisted: true, // rejette les propriétés inconnues
        transform: true,        // transforme les types (ex: string → Date)
      }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
