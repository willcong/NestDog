import { ApiProperty } from "@nestjs/swagger";

export class CreateDogDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  min_price: number;

  @ApiProperty()
  max_price: number;

  @ApiProperty()
  mercy_reserve: number;

  @ApiProperty()
  adoption_income: number;

  @ApiProperty()
  adoption_period: number;

  @ApiProperty()
  adoption_at: string;
}
