import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  ForeignKey,
  NonAttribute,
  Association,
} from "sequelize";
import sequelizeConnection from "../../config/config";
import Todo from "./todo";

class SubTask extends Model<
  InferAttributes<SubTask>,
  InferCreationAttributes<SubTask>
> {
  declare id: CreationOptional<number>;

  declare label: string;
  declare isDone: boolean;
  declare toDoId: ForeignKey<Todo["id"]>;
  declare toDo?: NonAttribute<Todo>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

SubTask.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isDone: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: DataTypes.DATE,
  },
  {
    sequelize: sequelizeConnection,
    tableName: "SubTask",
  }
);

export default SubTask;
