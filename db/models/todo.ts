import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  HasManyHasAssociationMixin,
  HasManyCountAssociationsMixin,
  HasManyHasAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManyGetAssociationsMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  HasManySetAssociationsMixin,
  NonAttribute,
  Association,
} from "sequelize";
import sequelizeConnection from "../../config/config";
import SubTask from "./subTask";

class Todo extends Model<InferAttributes<Todo>, InferCreationAttributes<Todo>> {
  declare id: CreationOptional<number>;

  declare label: string;
  declare isDone: boolean;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare subTasks?: NonAttribute<SubTask[]>;
  declare static associations: {
    subTasks: Association<Todo, SubTask>;
  };

  declare getSubTasks: HasManyGetAssociationsMixin<SubTask>;
  declare addSubTask: HasManyAddAssociationMixin<SubTask, number>;
  declare addSubTasks: HasManyAddAssociationsMixin<SubTask, number>;
  declare setSubTasks: HasManySetAssociationsMixin<SubTask, number>;
  declare removeSubTask: HasManyRemoveAssociationMixin<SubTask, number>;
  declare removeSubTasks: HasManyRemoveAssociationsMixin<SubTask, number>;
  declare hasSubTask: HasManyHasAssociationMixin<SubTask, number>;
  declare hasSubTasks: HasManyHasAssociationsMixin<SubTask, number>;
  declare countSubTask: HasManyCountAssociationsMixin;
  declare createSubTask: HasManyCreateAssociationMixin<SubTask, "toDoId">;
  declare countSubTasks: HasManyCountAssociationsMixin;
}

Todo.init(
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
    tableName: "Todo",
  }
);

Todo.hasMany(SubTask, {
  sourceKey: "id",
  foreignKey: "toDoId",
  as: "subTasks",
});

export default Todo;
