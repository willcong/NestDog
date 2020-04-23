import { ApiProperty } from "@nestjs/swagger";

export class CreateMyDogDto {
  @ApiProperty()
  dog_id: number;

  @ApiProperty()
  account: string;

  @ApiProperty()
  in_price: number;

  @ApiProperty()
  in_time: Date;

  @ApiProperty()
  state: number;
}
