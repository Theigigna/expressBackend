import { MongoRepository } from "../../repository/mongo.repository";
import { User } from "../../types";

export class UserModels {
  private readonly _repositoryMongoDb: MongoRepository;

  constructor(providerMongoDb: MongoRepository) {
    this._repositoryMongoDb = providerMongoDb;
  }

  public getUserByName(findingUser: string): Promise<Array<any>> {
    console.log(`getUserByName. | ${this.constructor.name}`);
    return new Promise((resolve, reject) => {
      this._repositoryMongoDb
        .findUser(findingUser)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          console.log(
            `Error getUserByName. ${JSON.stringify(error)}. | ${
              this.constructor.name
            }`
          );
          reject(error);
        });
    });
  }
  public createUser(user: User): Promise<Array<any>> {
    console.log(`createUser. | ${this.constructor.name}`);
    return new Promise((resolve, reject) => {
      this._repositoryMongoDb
        .userExists(user.userName)
        .then((exists) => {
          if (exists) {
            reject({
              message: `User ${user.userName} already exists`,
              errorCode: 409,
            });
          } else {
            this._repositoryMongoDb
              .insertUser(user)
              .then((result) => {
                resolve(result);
              })
              .catch((error) => {
                reject(error);
              });
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  public deleteUser(userName: string, password: string): Promise<Array<any>> {
    console.log(`deleteUser. | ${this.constructor.name}`);
    return new Promise((resolve, reject) => {
      this._repositoryMongoDb
        .deleteUser({
          userName: userName,
          password: password,
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          console.log(
            `Error deleteUser. ${JSON.stringify(error)}. | ${
              this.constructor.name
            }`
          );
          reject(error);
        });
    });
  }
}
