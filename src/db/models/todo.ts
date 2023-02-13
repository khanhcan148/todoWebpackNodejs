import { DataType } from "sequelize-typescript";
import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";
import SubTask from "./subTask";

@Table({ tableName: "Todo" })
class Todo extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER.UNSIGNED)
  id!: number;

  @Column(DataType.STRING)
  label!: string;

  @Column(DataType.BOOLEAN)
  isDone!: boolean;

  @HasMany(() => SubTask)
  subTasks!: SubTask[];

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;
}

export default Todo;
