"use strict";
import express from "express";
import { ConfigLoader } from "./config/config";

export class App {
  private _app: express;
  private _config: ConfigLoader;
  constructor(config: ConfigLoader) {
    this._config = config;
  }

  public init() {
    try {
      this._app = new express();
    } catch (error) {
      console.log(
        `Erropr al crear el servidor de express. Error: ${JSON.stringify(
          error
        )}`
      );
    }
  }
}
