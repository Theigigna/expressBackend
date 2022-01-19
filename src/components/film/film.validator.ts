"use strict";
import * as Joi from "joi";
import * as express from "express";

export class FilmValidator {
  /**
   * This schema is for creating films
   */
  private readonly filmSchema = Joi.object({
    userName: Joi.string().min(1).max(100).required(),
    title: Joi.string().min(1).max(100).required(),
    year: Joi.number().min(1888).required(),
    date: Joi.object({
      viewingDay: Joi.number().min(1).max(31).required(),
      viewingMonth: Joi.number().min(1).max(12).required(),
      viewingYear: Joi.number().min(1888).required(),
    }).optional(),
    duration: Joi.number().min(1).optional(),
    link: Joi.string().uri().optional(),
    score: Joi.number().min(0).max(10).optional(),
  }).required();

  /**
   * This schema is for finding films
   */
  private readonly findFilmSchema = Joi.object({
    userName: Joi.string().min(1).max(100).required(),
    title: Joi.string().min(1).max(100).required(),
    year: Joi.number().min(1888).optional(),
    date: Joi.object({
      viewingDay: Joi.number().min(1).max(31).required(),
      viewingMonth: Joi.number().min(1).max(12).required(),
      viewingYear: Joi.number().min(1888).required(),
    }).optional(),
  }).required();
  /**
   * This schema is for deleting films
   */
  private readonly deleteFilmSchema = Joi.object({
    userName: Joi.string().min(1).max(100).required(),
    title: Joi.string().min(1).max(100).required(),
    year: Joi.number().min(1888).optional(),
    date: Joi.object({
      viewingDay: Joi.number().min(1).max(31).required(),
      viewingMonth: Joi.number().min(1).max(12).required(),
      viewingYear: Joi.number().min(1888).required(),
    }).optional(),
  }).required();
  /**
   * This schema is for deleting films in specific date
   */
  private readonly deleteFilmInDateSchema = Joi.object({
    userName: Joi.string().min(1).max(100).required(),
    title: Joi.string().min(1).max(100).optional(),
    year: Joi.number().min(1888).optional(),
    date: Joi.object({
      viewingDay: Joi.number().min(1).max(31).required(),
      viewingMonth: Joi.number().min(1).max(12).required(),
      viewingYear: Joi.number().min(1888).required(),
    }).optional(),
  }).required();

  /**
   * This schema is for getting last film from an user
   */
  private readonly findLastFilmSchema = Joi.object({
    userName: Joi.string().min(1).max(100).required(),
  }).required();

  /**
   * This schema is for deleting last film from an user
   */
  private readonly deleteLastFilmSchema = Joi.object({
    userName: Joi.string().min(1).max(100).required(),
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
  /**
   * This function is used for validate a film removal
   * @param req Request
   * @param res Response
   * @param next Next function
   */
  public deleteFilmInDate(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void {
    const result = this.deleteFilmInDateSchema.validate(req.body);
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
  /**
   * This function is used for validate a last film getter
   * @param req Request
   * @param res Response
   * @param next Next function
   */
  public getLastFilm(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void {
    const result = this.findLastFilmSchema.validate(req.body);
    if (result.error) {
      console.log(
        `Deleting last film validation error ${result.error.message}. | ${this.constructor.name}`
      );
      next(result.error);
    } else {
      console.log(
        `Validated delete last film ${req.body}. | ${this.constructor.name}`
      );
      next();
    }
  }
  /**
   * This function is used for validate a last film removal
   * @param req Request
   * @param res Response
   * @param next Next function
   */
  public deleteLastFilm(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void {
    const result = this.deleteLastFilmSchema.validate(req.body);
    if (result.error) {
      console.log(
        `Deleting last film validation error ${result.error.message}. | ${this.constructor.name}`
      );
      next(result.error);
    } else {
      console.log(
        `Validated delete last film ${req.body}. | ${this.constructor.name}`
      );
      next();
    }
  }
}
