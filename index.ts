import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { InversifyExpressServer } from "inversify-express-utils";
import { Container } from "inversify";
import { bindings } from "./investifyConf";

(async () => {
  dotenv.config();

  var corsConfig = {
    origin: "http://localhost:8081",
  };

  const PORT = process.env.PORT || 8080;
  const container = new Container();
  await container.loadAsync(bindings);
  const app = new InversifyExpressServer(container);

  const server = app.build();

  server.use(cors(corsConfig));

  // parse requests of content-type - application/json
  server.use(bodyParser.json());

  // parse requests of content-type - application/x-www-form-urlencoded
  server.use(bodyParser.urlencoded({ extended: true }));

  server.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
  });
})();
