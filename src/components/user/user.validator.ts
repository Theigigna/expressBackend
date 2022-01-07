"use strict";
import * as Joi from "joi";
import * as express from "express";
import { valid } from "joi";

export class UserValidator {
  /**
   * This schema is for create users
   */
  private readonly userSchema = Joi.object({
    _id: Joi.string().optional(),
    userName: Joi.string().min(1).max(100).required(),
    password: Joi.string().min(1).max(100).required(),
    name: Joi.string().min(1).required(),
    surname: Joi.string().min(1).optional(),
    permission: Joi.string().valid("root", "user").required(),
  }).required();

  /**
   * This schema is for find users
   */
  private readonly findUserSchema = Joi.object({
    userName: Joi.string().min(1).max(100).required(),
  }).required();
  /**
   * This schema is for delete users
   */
  private readonly deleteUserSchema = Joi.object({
    userName: Joi.string().min(1).max(100).required(),
    password: Joi.string().min(1).max(100).required(),
  }).required();

  /**
   * This function is used for validate a user object
   * @param req Request
   * @param res Response
   * @param next Next function
   */
  public user(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void {
    const result = this.userSchema.validate(req.body);
    if (result.error) {
      console.log(
        `Creating user validation error ${result.error.message}. | ${this.constructor.name}`
      );
      next(result.error);
    } else {
      console.log(
        `Validated create user ${req.body}. | ${this.constructor.name}`
      );
      next();
    }
  }

  /**
   * This function is used for validate a user search
   * @param req Request
   * @param res Response
   * @param next Next function
   */
  public findUser(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void {
    const result = this.findUserSchema.validate(req.body);
    if (result.error) {
      console.log(
        `Finding user validation error ${result.error.message}. | ${this.constructor.name}`
      );
      next(result.error);
    } else {
      console.log(
        `Validated find user ${req.body}. | ${this.constructor.name}`
      );
      next();
    }
  }

  /**
   * This function is used for validate a user removal
   * @param req Request
   * @param res Response
   * @param next Next function
   */
  public deleteUser(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void {
    const result = this.deleteUserSchema.validate(req.body);
    if (result.error) {
      console.log(
        `Deleting user validation error ${result.error.message}. | ${this.constructor.name}`
      );
      next(result.error);
    } else {
      console.log(
        `Validated delete user ${req.body}. | ${this.constructor.name}`
      );
      next();
    }
  }
}
