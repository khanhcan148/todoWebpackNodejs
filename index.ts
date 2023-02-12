import { ToDoService } from "./services/ToDoService";
import "reflect-metadata";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { InversifyExpressServer } from "inversify-express-utils";
import { Container, decorate, injectable } from "inversify";
import { bindings } from "./investifyConf";
import { TYPES } from "./types";
import { IToDoService } from "./services/abstraction/IToDoService";
import express from "express";
import swaggerUi from "swagger-ui-express";

(async () => {
  dotenv.config();

  var corsConfig = {
    origin: "http://localhost:8081",
  };

  const PORT = process.env.PORT || 8080;
  // container
  const container = new Container();

  container.bind<IToDoService>(TYPES.TodoService).to(ToDoService);

  await container.loadAsync(bindings);

  // create server
  const server = new InversifyExpressServer(container);
  server.setConfig((app) => {
    app.use(express.static("public"));
    // add body parser
    app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );
    app.use(bodyParser.json());
    app.use(cors(corsConfig));

    app.use(
      "/docs",
      swaggerUi.serve,
      swaggerUi.setup(undefined, {
        swaggerOptions: {
          url: "/swagger.json",
        },
      })
    );
  });

  const app = server.build();

  app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
  });
})();
