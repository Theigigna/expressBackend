import { UserServices } from "./user.service";
import * as express from "express";

export class UserController {
  private readonly userService: UserServices;

  constructor(service: UserServices) {
    this.userService = service;
  }

  public createUser(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void {
    this.userService
      .createUser(req.body)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
  public getUser(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void {
    console.log("getUser");
    this.userService
      .getUser(req.body.userName)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
  public deleteUser(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void {
    this.userService
      .deleteUser(req.body.userName, req.body.password)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
}
