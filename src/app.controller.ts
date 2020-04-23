import { Controller, Get, Render } from "@nestjs/common";
import { AppService } from "./app.service";
import { MyLogger } from "./shared/logger/logger.service";
import { ConfigService } from "@nestjs/config";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logger: MyLogger,
    private readonly config: ConfigService
  ) {
    console.log(`AppController constructor `);
  }

  @Get()
  @Render("dog")
  getHello(): any {
    return { title: "hello world", content: this.appService.getHello() };
  }

  @Get("config")
  getUserConfig(): string {
    this.logger.log(`get user config`);
    return `
    database1.host = ${this.config.get<string>("database1.host")} , 
    port = ${this.config.get<number>("port")},
    database2 = ${JSON.stringify(this.config.get<any>("database2"))},
    `;
  }
}
