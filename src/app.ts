"use strict";

import express from "express";
import { ConfigLoader } from "./config/config";
import { FilmRoutes } from "./components/film/film.routes";
import { MongoRepository } from "./repository/mongo.repository";

export class App {
  private _app: any;
  private _config: ConfigLoader;
  private _repository: MongoRepository;
  constructor(config: ConfigLoader, repository: MongoRepository) {
    this._config = config;
    this._repository = repository;
  }

  public init() {
    try {
      this._app = express();
      this._app.use(express.json());
      const filmRoutes = new FilmRoutes(this._app, this._repository);
      filmRoutes.routes();
      this._app.listen(this._config.port);
      console.log(`Server listening on port ${this._config.port}`);
    } catch (error) {
      console.log(
        `Erropr al crear el servidor de express. Error: ${JSON.stringify(
          error
        )}`
      );
    }
  }
}
