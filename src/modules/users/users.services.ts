import { Injectable } from "@nestjs/common";
import { Sequelize } from "sequelize-typescript";
import { Users } from "./users.model";

@Injectable()
export class UsersService {
  constructor(private readonly sequelize: Sequelize) {}

  async findAll(): Promise<Array<Users>> {
    return Users.findAll();
  }
}
