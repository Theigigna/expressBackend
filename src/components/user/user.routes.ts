"use strict";

import { Router } from "express";
import { MongoRepository } from "../../repository/mongo.repository";
import { UserController } from "./user.controller";
import { UserModels } from "./user.models";
import { UserServices } from "./user.service";
import { UserValidator } from "./user.validator";

const PREFIX_PATH = "/api/v1";

export class UserRoutes {
  private readonly _api: Router;
  private readonly _userValidator: UserValidator;
  private readonly _userController: UserController;
  private readonly _userServices: UserServices;
  public _userModels: UserModels;

  constructor(api: Router, mongoRepository: MongoRepository) {
    this._api = api;
    this._userModels = new UserModels(mongoRepository);
    this._userServices = new UserServices(this._userModels);
    this._userController = new UserController(this._userServices);
    this._userValidator = new UserValidator();
    this.routes();
  }

  public async routes(): Promise<void> {
    this._api
      .route(`${PREFIX_PATH}/user`)
      .post(
        this._userValidator.user.bind(this._userValidator),
        this._userController.createUser.bind(this._userController)
      );
    this._api
      .route(`${PREFIX_PATH}/user`)
      .get(
        this._userValidator.findUser.bind(this._userValidator),
        this._userController.getUser.bind(this._userController)
      );
    this._api
      .route(`${PREFIX_PATH}/user`)
      .delete(
        this._userValidator.deleteUser.bind(this._userValidator),
        this._userController.deleteUser.bind(this._userController)
      );
  }
}
