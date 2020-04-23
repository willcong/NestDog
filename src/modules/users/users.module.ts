import { Module } from "@nestjs/common";
import { UsersService } from "./users.services";
import { UsersController } from "./users.controller";

@Module({
  imports: [],
  exports: [UsersService],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
