import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import Todo from "../db/models/todo";
import SubTask from "../db/models/subTask";

dotenv.config();

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

export async function initDb() {
  const sequelizeConnection: Sequelize = new Sequelize(
    dbName,
    dbUser,
    dbPassword,
    {
      host: dbHost,
      dialect: "postgres",
    }
  );

  sequelizeConnection.addModels([Todo, SubTask]);

  await Todo.sync({ force: true });
  await SubTask.sync({ force: true });
}
