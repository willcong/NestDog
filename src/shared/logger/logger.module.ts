import { Module, Global } from "@nestjs/common";
import { MyLogger } from "./logger.service";

@Global()
@Module({
  imports: [],
  exports: [MyLogger],
  providers: [MyLogger]
})
export class MyLoggerModule {}
