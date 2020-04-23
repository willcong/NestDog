import { Column, Model, Table } from "sequelize-typescript";

@Table({
  timestamps: true,
  underscored: true
})
export class Dogs extends Model<Dogs> {
  @Column({ comment: "名字" })
  name: string;

  @Column({ comment: "最低价格" })
  min_price: number;

  @Column({ comment: "最高价格" })
  max_price: number;

  @Column({ comment: "爱心值" })
  mercy_reserve: number;

  @Column({ comment: "收益率" })
  adoption_income: number;

  @Column({ comment: "收益日期" })
  adoption_period: number;

  @Column({ comment: "匹配时间" })
  adoption_at: string;
}
