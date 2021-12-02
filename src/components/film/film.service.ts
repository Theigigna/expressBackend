import { Film } from "../../types";
import { FilmModels } from "./film.models";

export class FilmServices {
  private readonly _filmModel: FilmModels;

  constructor(model: FilmModels) {
    this._filmModel = model;
  }

  public insertFilm(insertingFilm: Film): Promise<any> {
    return new Promise((resolve, reject) => {
      this._filmModel
        .insertFilm(insertingFilm)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
