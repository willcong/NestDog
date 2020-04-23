import { Module } from "@nestjs/common";
import { MyDogsController } from "./my_dogs.controller";
import { MyDogsService } from "./my_dogs.services";
import { DogsModule } from "../dogs/dogs.module";

@Module({
  imports: [DogsModule],
  exports: [MyDogsService],
  providers: [MyDogsService],
  controllers: [MyDogsController]
})
export class MyDogsModule {}
