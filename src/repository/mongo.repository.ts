"use strict";
import { MongoProvider } from "./mongo.provider";
import { HttpInfoResponse } from "../types";
import { ConfigLoader } from "../config/config";

export class MongoRepository {
  private _config: ConfigLoader;
  private _provider: MongoProvider;

  constructor(config: ConfigLoader, provider: MongoProvider) {
    this._config = config;
    this._provider = provider;
  }

  public operative(): boolean {
    return this._provider.operative;
  }

  // public addNewUser(user: User): number {

  // }

  public findUser(userName: string): any {
    if (userName != "") {
      this._provider
        .find(this._config.mongoUserCollection, "userName", userName)
        .then((result) => {
          console.log("then");
          return result;
        })
        .catch((error) => {
          console.log("catch");
          console.log(JSON.stringify(error));
          return {
            message: JSON.stringify(error),
            errorCode: 400,
          };
        });
    } else {
      return {
        message: "El campo userName no puede ser vacio",
        httpCode: 400,
      };
    }
    return {
      message: "No return in function findUser",
      httpCode: 400,
    };
  }
}
