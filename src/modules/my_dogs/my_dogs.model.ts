import {
  Column,
  Model,
  Table,
  CreatedAt,
  UpdatedAt
} from "sequelize-typescript";

@Table({
  timestamps: true,
  underscored: true
})
export class My_Dogs extends Model<My_Dogs> {
  @Column({ comment: "购买账号" })
  account: string;

  @Column({ comment: "狗类型ID" })
  dog_id: number;

  @Column({ comment: "爱心值" })
  mercy_reserve: number;

  @Column({ comment: "入手价格" })
  in_price: number;

  @Column({ comment: "出手价格" })
  out_price: number;

  @Column({ comment: "入手时间" })
  in_time: Date;

  @Column({ comment: "出手时间" })
  out_time: Date;

  @Column({ comment: "状态，0:领养中,1:完成" })
  state: number;
}
