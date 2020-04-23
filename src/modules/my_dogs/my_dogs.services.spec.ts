import { Test, TestingModule } from "@nestjs/testing";
import { MyDogsService } from "./my_dogs.services";

describe("DogsService", () => {
  let service: MyDogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyDogsService]
    }).compile();

    service = module.get<MyDogsService>(MyDogsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
