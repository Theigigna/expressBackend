"use strict";
import { MongoProvider } from "./mongo.provider";
import { User, Film, HttpInfoResponse } from "../types";
import { ConfigLoader } from "../config/config";

export class MongoRepository {
  private _config: ConfigLoader;
  private _provider: MongoProvider;

  constructor(config: ConfigLoader, provider: MongoProvider) {
    this._config = config;
    this._provider = provider;
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
          console.log(
            `Error finding user ${JSON.stringify(error)}. | ${
              this.constructor.name
            }`
          );
          return {
            message: JSON.stringify(error),
            errorCode: 500,
          };
        });
    } else {
      return {
        message: "El campo userName no puede ser vacio",
        httpCode: 400,
      };
    }
  }

  public findFilm(findFilmObject: {}): any {
    this._provider
      .findObject(this._config.mongoUserCollection, findFilmObject)
      .then((result) => {
        console.log("then");
        return result;
      })
      .catch((error) => {
        console.log(
          `Error filnding film ${JSON.stringify(error)}. | ${
            this.constructor.name
          }`
        );
        return {
          message: JSON.stringify(error),
          errorCode: 500,
        };
      });
  }

  public insertFilm(findFilmObject: Film): any {
    this._provider
      .insert(this._config.mongoUserCollection, findFilmObject)
      .then((result) => {
        console.log("then");
        return result;
      })
      .catch((error) => {
        console.log(
          `Error inserting film ${JSON.stringify(error)}. | ${
            this.constructor.name
          }`
        );
        return {
          message: JSON.stringify(error),
          errorCode: 500,
        };
      });
  }

  public deleteFilm(deleteFilmObject: {}): any {
    this._provider
      .deleteObject(this._config.mongoUserCollection, deleteFilmObject)
      .then((result) => {
        console.log("then");
        return result;
      })
      .catch((error) => {
        console.log(
          `Error deleting film ${JSON.stringify(error)}. | ${
            this.constructor.name
          }`
        );
        return {
          message: JSON.stringify(error),
          errorCode: 500,
        };
      });
  }
}
