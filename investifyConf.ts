import { AsyncContainerModule } from "inversify";
import { initAndSeedDb } from "./db/initDb";
import "reflect-metadata";

export const bindings = new AsyncContainerModule(async (bind) => {
  await initAndSeedDb();

  await require("./controllers/homeController");
});
