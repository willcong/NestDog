import { Injectable, NotFoundException } from "@nestjs/common";
import { Sequelize } from "sequelize-typescript";
import { CreateMyDogDto } from "./my_dogs.dto";
import { My_Dogs } from "./my_dogs.model";
import { DogsService } from "../dogs/dogs.services";
import { isNullOrUndefined } from "util";
import moment from "moment";

@Injectable()
export class MyDogsService {
  constructor(
    private readonly sequelize: Sequelize,
    private readonly dogsService: DogsService
  ) {}

  async create(createMyDogDto: CreateMyDogDto): Promise<My_Dogs> {
    let newMyDog = new My_Dogs();

    let dogData = await this.dogsService.findByID(createMyDogDto.dog_id);
    if (isNullOrUndefined(dogData)) {
      throw new NotFoundException();
    }

    newMyDog.account = createMyDogDto.account;
    newMyDog.dog_id = createMyDogDto.dog_id;
    newMyDog.mercy_reserve = dogData.mercy_reserve;
    newMyDog.in_price = createMyDogDto.in_price;
    newMyDog.out_price =
      createMyDogDto.in_price +
      createMyDogDto.in_price * dogData.adoption_income;
    newMyDog.in_time = moment().toDate(); //createMyDogDto.in_time;
    newMyDog.out_time = moment()
      .add(dogData.adoption_period, "days")
      .toDate();
    newMyDog.account = createMyDogDto.account;

    return newMyDog.save();
  }

  async findOne(user_name: string): Promise<void> {
    throw new Error("未实现");
  }

  async findAll(): Promise<Array<My_Dogs>> {
    return My_Dogs.findAll();
  }
}
