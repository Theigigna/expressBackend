import { User } from "../../types";
import { UserModels } from "./user.models";

export class UserServices {
  private readonly _userModel: UserModels;

  constructor(model: UserModels) {
    this._userModel = model;
  }

  public createUser(insertingUser: User): Promise<any> {
    return new Promise((resolve, reject) => {
      this._userModel
        .createUser(insertingUser)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  public getUser(findingUser: string): Promise<any> {
    console.log();
    return new Promise((resolve, reject) => {
      this._userModel
        .getUserByName(findingUser)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  public deleteUser(userName: string, password: string): Promise<any> {
    console.log();
    return new Promise((resolve, reject) => {
      this._userModel
        .deleteUser(userName, password)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
