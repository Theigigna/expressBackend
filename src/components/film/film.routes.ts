"use strict";

import { Router } from "express";
import { MongoRepository } from "../../repository/mongo.repository";
import { FilmController } from "./film.controller";
import { FilmModels } from "./film.models";
import { FilmServices } from "./film.service";
import { FilmValidator } from "./film.validator";
import fileUpload from "express-fileupload";

const PREFIX_PATH = "/api/v1";

export class FilmRoutes {
  private readonly _api: Router;
  private readonly _filmValidator: FilmValidator;
  private readonly _filmController: FilmController;
  private readonly _filmServices: FilmServices;
  public _filmModels: FilmModels;

  constructor(api: Router, mongoRepository: MongoRepository) {
    this._api = api;
    this._filmModels = new FilmModels(mongoRepository);
    this._filmServices = new FilmServices(this._filmModels);
    this._filmController = new FilmController(this._filmServices);
    this._filmValidator = new FilmValidator();
    this.routes();
  }

  public async routes(): Promise<void> {
    this._api
      .route(`${PREFIX_PATH}/film`)
      .post(
        this._filmValidator.film.bind(this._filmValidator),
        this._filmController.insertFilm.bind(this._filmController)
      );
    // this._api
    //   .route(`${PREFIX_PATH}/film`)
    //   .get(
    //     this._filmValidator.findFilm.bind(this._filmValidator),
    //     this._filmController.getFilm.bind(this._filmController)
    //   );

    // this._api
    //   .route(`${PREFIX_PATH}/film`)
    //   .delete(
    //     this._filmValidator.deleteFilm.bind(this._filmValidator),
    //     this._filmController.deleteFilm.bind(this._filmController)
    //   );
    // this._api
    //   .route(`${PREFIX_PATH}/lastFilm`)
    //   .get(
    //     this._filmValidator.findLastFilmSchema.bind(this._filmValidator),
    //     this._filmController.getLastFilm.bind(this._filmController)
    //   );
    // this._api
    //   .route(`${PREFIX_PATH}/lastFilm`)
    //   .delete(
    //     this._filmValidator.deleteLastFilm.bind(this._filmValidator),
    //     this._filmController.deleteLastFilm.bind(this._filmController)
    //   );
  }
}
