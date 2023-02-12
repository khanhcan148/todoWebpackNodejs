import { AsyncContainerModule } from "inversify";
import { initAndSeedDb } from "./db/initDb";

export const bindings = new AsyncContainerModule(async (bind) => {
  await initAndSeedDb();

  //await require("./controllers/movie_controller");
});
