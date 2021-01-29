import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';


async function bootstrap() {
  const logger = new Logger('main-app');
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT, ()=> {
    logger.log(`app running at port : ${process.env.PORT}`)
  });
}
bootstrap();
