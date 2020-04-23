import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { DogsService } from "./dogs.services";
import { CreateDogDto } from "./dogs.dto";
import { Dogs } from "./dogs.model";

@Controller("dogs")
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Post()
  create(@Body() createDogDto: CreateDogDto): Promise<Dogs> {
    return this.dogsService.create(createDogDto);
  }

  @Get()
  findAll(): Promise<Array<Dogs>> {
    return this.dogsService.findAll();
  }

  @Get(":one_value")
  findOne(@Param("one_value") one_value: string): Promise<Dogs> {
    if (isNaN(parseInt(one_value, 2))) {
      return this.dogsService.findOne(one_value);
    } else {
      return this.dogsService.findByID(parseInt(one_value, 2));
    }
  }
}
