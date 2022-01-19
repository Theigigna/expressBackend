import { MongoRepository } from "../../repository/mongo.repository";
import { Film, User } from "../../types";

export class FilmModels {
  private readonly _repositoryMongoDb: MongoRepository;

  constructor(providerMongoDb: MongoRepository) {
    this._repositoryMongoDb = providerMongoDb;
  }

  public getAllFilmsByUser(findingUser: string): Promise<Array<any>> {
    console.log(`getAllFilmsByUser. | ${this.constructor.name}`);
    return new Promise((resolve, reject) => {
      this._repositoryMongoDb
        .findFilm({ user: findingUser })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          console.log(
            `Error getAllFilmsByUser. ${JSON.stringify(error)}. | ${
              this.constructor.name
            }`
          );
          reject(error);
        });
    });
  }
  public getAllFilmsByTitle(findingTitle: string): Promise<Array<any>> {
    console.log(`getAllFilmsByTitle. | ${this.constructor.name}`);
    return new Promise((resolve, reject) => {
      this._repositoryMongoDb
        .findFilm({ title: findingTitle })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          console.log(
            `Error getAllFilmsByTitle. ${JSON.stringify(error)}. | ${
              this.constructor.name
            }`
          );
          reject(error);
        });
    });
  }
  public getAllFilmsByUserAndTitle(
    findingUser: string,
    findingTitle: string
  ): Promise<Array<any>> {
    console.log(`getAllFilmsByUserAndTitle. | ${this.constructor.name}`);
    return new Promise((resolve, reject) => {
      this._repositoryMongoDb
        .findFilm({ user: findingUser, title: findingTitle })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          console.log(
            `Error getAllFilmsByUserAndTitle. ${JSON.stringify(error)}. | ${
              this.constructor.name
            }`
          );
          reject(error);
        });
    });
  }
  public insertFilm(insertingFilm: Film): Promise<any> {
    console.log(
      `insertFilm ${JSON.stringify(insertingFilm)}. | ${this.constructor.name}`
    );
    if (!insertingFilm.hasOwnProperty("date")) {
      const actualDate = new Date();
      insertingFilm.date = {
        viewingDay: actualDate.getDate(),
        viewingMonth: actualDate.getMonth(),
        viewingYear: actualDate.getFullYear(),
      };
    }
    return new Promise((resolve, reject) => {
      this._repositoryMongoDb
        .insertFilm(insertingFilm)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          console.log(
            `Error insertFilm. ${JSON.stringify(error)}. | ${
              this.constructor.name
            }`
          );
          reject(error);
        });
    });
  }

  public getAllUsersByUser(findingUser: string): Promise<Array<User>> {
    console.log(`getAllUsersByUser. | ${this.constructor.name}`);
    return new Promise((resolve, reject) => {
      this._repositoryMongoDb
        .findUser(findingUser)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          console.log(
            `Error getAllUsersByUser. ${JSON.stringify(error)}. | ${
              this.constructor.name
            }`
          );
          reject(error);
        });
    });
  }
}
