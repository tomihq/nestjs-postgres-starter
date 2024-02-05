import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('main');
  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  /* Using compression helps to decrease the size of the response body. DON'T use it if you have a reverse-proxy as NGINX, or Apache. */
  app.use(compression());
  app.use(helmet());

  await app.listen(process.env.PORT);
  logger.log(`App running on PORT ${process.env.PORT}`);
}
bootstrap();
