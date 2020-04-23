import { Column, Model, Table, DataType } from "sequelize-typescript";
export interface IBalanceData {
  currency: { id: number; code: string };
  currencyId: number;
  currentAmount: number;
  freezedAmount: number;
  user: number;
  userId: number;
}
export interface IBalance {
  1: IBalanceData;
  2: IBalanceData;
  3: IBalanceData;
  4: IBalanceData;
}

export interface IBankData {
  //支付用户名
  accountHolder: string;
  accountNo: string;
  bank: {
    id: number;
    code: string;
    type: number;
    sort: number;
    isActive: boolean;
  };
  bankId: number;
  branchName: "";
  createdAt: Date;
  id: number;
  isActive: boolean;
  media: {
    format: string;
    guid: string;
    height: number;
    id: number;
    status: string;
    type: string;
    url: string;
    user: string;
    userGroup: string;
    userId: number;
    width: number;
  };
  mediaId: number;
  status: boolean;
  updatedAt: Date;
  user: number;
  userId: number;
}

@Table({
  underscored: true
})
export class Users extends Model<Users> {
  @Column({ comment: "余额信息", type: DataType.JSONB })
  balance: IBalance;

  @Column({ comment: "收款信息", type: DataType.JSONB })
  bankAccounts: Array<IBankData>;

  @Column({ comment: "账号创建时间" })
  createdAt: Date;

  @Column({ comment: "出生日期" })
  dob: Date;

  @Column({ comment: "" })
  email: string;

  @Column({ comment: "" })
  id: number;

  @Column({ comment: "激活状态?" })
  isActive: boolean;

  @Column({ comment: "是否员工?" })
  isStaff: false;

  @Column({ comment: "??" })
  masterId: 0;

  @Column({ comment: "每款最大交易次数" })
  maxTradingCount: 5;

  @Column({ comment: "姓名" })
  name: "李益燕";

  @Column({ comment: "??" })
  nameStatus: number;

  @Column({ comment: "身份证/护照号" })
  passportNo: string;

  @Column({ comment: "联系方式" })
  phone: string;

  @Column({ comment: "???" })
  referralCode: string;

  @Column({ comment: "安全码答案" })
  securityAns: string;

  @Column({ comment: "账号信息更新时间" })
  updatedAt: Date;

  @Column({ comment: "用户名" })
  username: string;
}
