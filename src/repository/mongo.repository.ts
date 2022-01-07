"use strict";
import { MongoProvider } from "./mongo.provider";
import { User, Film } from "../types";
import { ConfigLoader } from "../config/config";

export class MongoRepository {
  private _config: ConfigLoader;
  private _provider: MongoProvider;

  constructor(config: ConfigLoader, provider: MongoProvider) {
    this._config = config;
    this._provider = provider;
  }

  public findUser(findUserObject: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this._provider
        .find(this._config.mongoUserCollection, "userName", findUserObject)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          console.log(
            `Error finding user ${JSON.stringify(error)}. | ${
              this.constructor.name
            }`
          );
          reject(error);
        });
    });
  }

  public insertUser(insertUserObject: User): Promise<any> {
    return new Promise((resolve, reject) => {
      this._provider
        .insert(this._config.mongoUserCollection, insertUserObject)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          console.log(
            `Error inserting user ${JSON.stringify(error)}. | ${
              this.constructor.name
            }`
          );
          reject(error);
        });
    });
  }

  public deleteUser(deleteUserObject: {}): Promise<any> {
    return new Promise((resolve, reject) => {
      this._provider
        .deleteObject(this._config.mongoUserCollection, deleteUserObject)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          console.log(
            `Error deleting user ${JSON.stringify(error)}. | ${
              this.constructor.name
            }`
          );
          reject(error);
        });
    });
  }

  public findFilm(findFilmObject: {}): Promise<any> {
    return new Promise((resolve, reject) => {
      this._provider
        .findObject(this._config.mongoFilmCollection, findFilmObject)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          console.log(
            `Error filnding user ${JSON.stringify(error)}. | ${
              this.constructor.name
            }`
          );
          reject(error);
        });
    });
  }

  public insertFilm(insertFilmObject: Film): Promise<any> {
    console.log(`insertFilm. | ${this.constructor.name}`);
    return new Promise((resolve, reject) => {
      this._provider
        .insert(this._config.mongoFilmCollection, insertFilmObject)
        .then((result) => {
          console.log("Then insert Film");
          resolve(result);
        })
        .catch((error) => {
          console.log(
            `Error insertFilm ${JSON.stringify(error)}. | ${
              this.constructor.name
            }`
          );
          reject(error);
        });
    });
  }

  public deleteFilm(deleteFilmObject: {}): Promise<any> {
    return new Promise((resolve, reject) => {
      this._provider
        .deleteObject(this._config.mongoFilmCollection, deleteFilmObject)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          console.log(
            `Error deleting film ${JSON.stringify(error)}. | ${
              this.constructor.name
            }`
          );
          reject(error);
        });
    });
  }

  public userExists(userName: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this._provider
        .find(this._config.mongoUserCollection, "userName", userName)
        .then((result) => {
          if (Array.isArray(result) && result.length >= 1) {
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch((error) => {
          console.log(
            `Error finding ${userName} user ${JSON.stringify(error)}. | ${
              this.constructor.name
            }`
          );
          reject(error);
        });
    });
  }
}
