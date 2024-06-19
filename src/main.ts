import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './middleware/error';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = app.get(ConfigService);

  // Set up global validation pipe for request validation
  app.useGlobalPipes(new ValidationPipe());

  // Set a global prefix for all routes
  app.setGlobalPrefix('api/v1');

  // Configure Swagger for API documentation
  const conf = new DocumentBuilder()
    .setTitle('Mock Interview - API')
    .setDescription('Mock Interview API 1.0')
    .setVersion('0.1')
    .addBearerAuth({
      description: `Please enter token in following format: Bearer <JWT>`,
      name: 'Authorization',
      bearerFormat: 'Bearer',
      scheme: 'Bearer',
      type: 'http',
      in: 'Header',
    })
    .build();

  const document = SwaggerModule.createDocument(app, conf);
  SwaggerModule.setup('api/v1/docs', app, document);

  const httpAdapter = app.get(HttpAdapterHost);

  // Setup global error handler
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  await app.listen(config.get('port'));
}
bootstrap();
