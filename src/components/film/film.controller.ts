import { FilmServices } from "./film.service";
import * as express from "express";

export class FilmController {
  private readonly filmService: FilmServices;

  constructor(service: FilmServices) {
    this.filmService = service;
  }

  public insertFilm(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void {
    this.filmService
      .insertFilm(req.body)
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
  // public getFilm(
  //   req: express.Request,
  //   res: express.Response,
  //   next: express.NextFunction
  // ): void {
  //   this.filmService
  //     .getFilm(req.body)
  //     .then((result) => {
  //       res.status(200).json(result);
  //     })
  //     .catch((error) => {
  //       res.status(500).json(error);
  //     });
  // }
  // public deleteFilm(
  //   req: express.Request,
  //   res: express.Response,
  //   next: express.NextFunction
  // ): void {
  //   this.filmService
  //     .deleteFilm(req.body)
  //     .then((result) => {
  //       res.status(200).json(result);
  //     })
  //     .catch((error) => {
  //       res.status(500).json(error);
  //     });
  // }
  // public deleteFilm(
  //   req: express.Request,
  //   res: express.Response,
  //   next: express.NextFunction
  // ): void {
  //   this.filmService
  //     .deleteFilm(req.body)
  //     .then((result) => {
  //       res.status(200).json(result);
  //     })
  //     .catch((error) => {
  //       res.status(500).json(error);
  //     });
  // }
}
