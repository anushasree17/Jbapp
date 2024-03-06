import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 3002;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  console.log('App service is started at ', PORT);
}
bootstrap();
