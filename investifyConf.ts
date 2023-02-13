import { AsyncContainerModule } from "inversify";
import { initAndSeedDb } from "./src/db/initDb";
import "reflect-metadata";

export const bindings = new AsyncContainerModule(async (bind) => {
  await initAndSeedDb();

  await require("./src/controllers/ToDoController");
});
