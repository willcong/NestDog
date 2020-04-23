import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { MyLogger } from "./shared/logger/logger.service";
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: true
  });
  console.log(`app created`);
  //app.setGlobalPrefix("api");
  app.useLogger(new MyLogger());
  app.setBaseViewsDir(join(__dirname, "..", "views"));
  app.setViewEngine("pug");

  const options = new DocumentBuilder()
    .setTitle("rkt service")
    .setDescription("The rkt service API description")
    .setVersion("1.0")
    .addTag("service")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("docs", app, document);

  const configService = app.get(ConfigService);
  console.log(configService.get<number>("port"));
  await app.listen(configService.get<number>("port"));
}
console.log(`bootstrap begin`);
bootstrap();
