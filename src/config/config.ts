"use strict";

const CONFIG_DEFAULT_PORT: string = "5000";
const CONFIG_DEFAULT_MONGO_PORT: string = "27017";
const CONFIG_DEFAULT_MONGO_URL: string = "localhost";
const CONFIG_DEFAULT_MONGO_DATABASE: string = "historial";
const CONFIG_DEFAULT_MONGO_USER_COLLECTION: string = "users";
const CONFIG_DEFAULT_MONGO_FILM_COLLECTION: string = "films";
const CONFIG_DEFAULT_MONGO_COMIC_COLLECTION: string = "comics";
const CONFIG_DEFAULT_MONGO_SERIES_COLLECTION: string = "series";

const CONFIG_PORT = process.env.CONFIG_PORT || CONFIG_DEFAULT_PORT;
const CONFIG_MONGO_PORT =
  process.env.CONFIG_MONGO_PORT || CONFIG_DEFAULT_MONGO_PORT;
const CONFIG_MONGO_URL =
  process.env.CONFIG_MONGO_URL || CONFIG_DEFAULT_MONGO_URL;
const CONFIG_MONGO_DATABASE =
  process.env.CONFIG_MONGO_DATABASE || CONFIG_DEFAULT_MONGO_DATABASE;
const CONFIG_MONGO_USER_COLLECTION =
  process.env.CONFIG_MONGO_USER_COLLECTION ||
  CONFIG_DEFAULT_MONGO_USER_COLLECTION;
const CONFIG_MONGO_FILM_COLLECTION =
  process.env.CONFIG_MONGO_FILM_COLLECTION ||
  CONFIG_DEFAULT_MONGO_FILM_COLLECTION;
const CONFIG_MONGO_COMIC_COLLECTION =
  process.env.CONFIG_MONGO_COMIC_COLLECTION ||
  CONFIG_DEFAULT_MONGO_COMIC_COLLECTION;
const CONFIG_MONGO_SERIES_COLLECTION =
  process.env.CONFIG_MONGO_SERIES_COLLECTION ||
  CONFIG_DEFAULT_MONGO_SERIES_COLLECTION;
  

export class ConfigLoader {
  private _port: number;
  private _mongoPort: number;
  private _mongoURL: string;
  private _mongoDatabase: string;
  private _mongoUserCollection: string;
  private _mongoFilmCollection: string;
  private _mongoComicCollection: string;
  private _mongoSeriesCollection: string;

  constructor() {
    this._port = Number(CONFIG_PORT);
    this._mongoPort = Number(CONFIG_MONGO_PORT);
    this._mongoURL = CONFIG_MONGO_URL;
    this._mongoDatabase = CONFIG_MONGO_DATABASE;
    this._mongoUserCollection = CONFIG_MONGO_USER_COLLECTION;
    this._mongoFilmCollection = CONFIG_MONGO_FILM_COLLECTION;
    this._mongoComicCollection = CONFIG_MONGO_COMIC_COLLECTION;
    this._mongoSeriesCollection = CONFIG_MONGO_SERIES_COLLECTION;
  }
  get port(): number {
    return this._port;
  }
  get mongoPort(): number {
    return this._mongoPort;
  }
  get mongoURL(): string {
    return this._mongoURL;
  }
  get mongoDatabase(): string {
    return this._mongoDatabase;
  }
  get mongoUserCollection(): string {
    return this._mongoUserCollection;
  }
  get mongoFilmCollection(): string {
    return this._mongoFilmCollection;
  }
  get mongoComicCollection(): string {
    return this._mongoComicCollection;
  }
  get mongoSeriesCollection(): string {
    return this._mongoSeriesCollection;
  }
}
