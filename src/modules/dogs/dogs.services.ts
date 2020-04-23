import { Injectable } from "@nestjs/common";
import { Sequelize } from "sequelize-typescript";
import { CreateDogDto } from "./dogs.dto";
import { Dogs } from "./dogs.model";

@Injectable()
export class DogsService {
  constructor(private readonly sequelize: Sequelize) {}

  async create(createDogDto: CreateDogDto): Promise<Dogs> {
    const newDog: Dogs = new Dogs();
    newDog.name = createDogDto.name;
    newDog.min_price = createDogDto.min_price;
    newDog.max_price = createDogDto.max_price;
    newDog.mercy_reserve = createDogDto.mercy_reserve;
    newDog.adoption_income = createDogDto.adoption_income;
    newDog.adoption_period = createDogDto.adoption_period;
    newDog.adoption_at = createDogDto.adoption_at;

    return newDog.save();
    //throw new Error("未实现");
  }

  async findAll(): Promise<Array<Dogs>> {
    return Dogs.findAll();
  }

  async findOne(name: string): Promise<Dogs> {
    return Dogs.findOne({
      where: {
        name
      }
    });
  }

  async findByID(id: number): Promise<Dogs> {
    return Dogs.findByPk(id);
  }
}
