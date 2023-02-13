import { BelongsTo, DataType, ForeignKey } from "sequelize-typescript";
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";
import Todo from "./todo";

@Table({ tableName: "SubTask" })
class SubTask extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER.UNSIGNED)
  id!: number;

  @Column(DataType.STRING)
  label!: string;

  @Column(DataType.BOOLEAN)
  isDone!: boolean;

  @ForeignKey(() => Todo)
  @Column
  toDoId!: number;

  @BelongsTo(() => Todo, "toDoId")
  toDo!: Todo;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;
}

export default SubTask;
