"use strict";
import * as Joi from "joi";
import * as express from "express";

export class FilmValidator {
  /**
   * This schema is for create films
   */
  private readonly filmSchema = Joi.object({
    user: Joi.string().min(1).max(100).required(),
    title: Joi.string().min(1).max(100).required(),
    year: Joi.number().min(1888).required(),
    viewingYear: Joi.number().min(1888).required(),
    duration: Joi.number().min(1).optional(),
    link: Joi.string().uri().optional(),
    score: Joi.number().min(0).max(10).optional(),
  }).required();

  /**
   * This schema is for find films
   */
  private readonly findFilmSchema = Joi.object({
    user: Joi.string().min(1).max(100).required(),
    title: Joi.string().min(1).max(100).required(),
    year: Joi.number().min(1888).optional(),
    viewingYear: Joi.number().min(1888).optional(),
  }).required();
  /**
   * This schema is for delete films
   */
  private readonly deleteFilmSchema = Joi.object({
    user: Joi.string().min(1).max(100).required(),
    title: Joi.string().min(1).max(100).required(),
    year: Joi.number().min(1888).optional(),
    viewingYear: Joi.number().min(1888).optional(),
  }).required();

  /**
   * This function is used for validate a film object
   * @param req Request
   * @param res Response
   * @param next Next function
   */
  public film(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void {
    console.log(`Film to validate: ${JSON.stringify(req.body)}`);
    const result = this.filmSchema.validate(req.body);
    if (result.error) {
      console.log(
        `Creating film validation error ${result.error.message}. | ${this.constructor.name}`
      );
      next(result.error);
    } else {
      console.log(
        `Validated creating film ${req.body}. | ${this.constructor.name}`
      );
      next();
    }
  }

  /**
   * This function is used for validate a film search
   * @param req Request
   * @param res Response
   * @param next Next function
   */
  public findFilm(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void {
    const result = this.findFilmSchema.validate(req.body);
    if (result.error) {
      console.log(
        `Finding film validation error ${result.error.message}. | ${this.constructor.name}`
      );
      next(result.error);
    } else {
      console.log(
        `Validated find film ${req.body}. | ${this.constructor.name}`
      );
      next();
    }
  }

  /**
   * This function is used for validate a film removal
   * @param req Request
   * @param res Response
   * @param next Next function
   */
  public deleteFilm(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void {
    const result = this.deleteFilmSchema.validate(req.body);
    if (result.error) {
      console.log(
        `Deleting film validation error ${result.error.message}. | ${this.constructor.name}`
      );
      next(result.error);
    } else {
      console.log(
        `Validated delete film ${req.body}. | ${this.constructor.name}`
      );
      next();
    }
  }
}
