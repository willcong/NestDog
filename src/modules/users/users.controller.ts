import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.services";
import { Users } from "./users.model";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<Array<Users>> {
    return this.usersService.findAll();
  }
}
