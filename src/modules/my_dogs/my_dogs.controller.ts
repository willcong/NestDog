import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { MyDogsService } from "./my_dogs.services";
import { CreateMyDogDto } from "./my_dogs.dto";
import { My_Dogs } from "./my_dogs.model";

@Controller("mydogs")
export class MyDogsController {
  constructor(private readonly myDogsService: MyDogsService) {}

  @Post()
  create(@Body() createMyDogDto: CreateMyDogDto): Promise<My_Dogs> {
    return this.myDogsService.create(createMyDogDto);
  }

  @Get()
  findAll(): Promise<Array<My_Dogs>> {
    return this.myDogsService.findAll();
  }

  @Get(":user_name")
  findOne(@Param("user_name") user_name: string): Promise<void> {
    return this.myDogsService.findOne(user_name);
  }
}
