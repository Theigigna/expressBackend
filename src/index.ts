"use strict";

import { App } from "./app";
import { ConfigLoader } from "./config/config";
import { MongoProvider } from "./repository/mongo.provider";
import { MongoRepository } from "./repository/mongo.repository";

const config = new ConfigLoader();
let mongoProvider: MongoProvider;
let repository: MongoRepository;
let server: App;
mongoProvider = new MongoProvider(config);
repository = new MongoRepository(config, mongoProvider);
server = new App(config, repository);
server.init();
