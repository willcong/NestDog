import { Module } from "@nestjs/common";
import { DogsController } from "./dogs.controller";
import { DogsService } from "./dogs.services";

@Module({
  imports: [],
  exports: [DogsService],
  providers: [DogsService],
  controllers: [DogsController]
})
export class DogsModule {}
