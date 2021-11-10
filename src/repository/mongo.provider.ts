"use strict";

import { Collection, Db, MongoClient } from "mongodb";
import { ConfigLoader } from "../config/config";

export class MongoProvider {
  private _client: MongoClient;
  private _db: Db;
  private _operative: boolean = false;

  constructor(config: ConfigLoader) {
    const mongoURL: string = `mongodb://${config.mongoURL}:${config.mongoPort}`;
    this._client = new MongoClient(mongoURL);
    this._client
      .connect()
      .then((result) => {
        this._client = result;
        this._operative = true;
        console.log(`Successfully connected to mongo on: ${mongoURL}`);
      })
      .catch((error) => {
        console.log(
          `Could not connect to mongo on: ${mongoURL}. Error ${JSON.stringify(
            error
          )}`
        );
      });
    this._db = this._client.db(config.mongoDatabase);
  }

  get operative(): boolean {
    return this.operative;
  }

  /**
   * Find objects from mongoDB in a specific collection
   *
   * @param {string} collection name of the collection object will be searched
   * @param {string} field name of the field used for searching
   * @param {string} value value of the field used for searching
   * @returns {Promise<any>} data found in mongo
   * @memberof mongo.provider
   */
  public find(collection: string, field: string, value: string): Promise<any> {
    const mongoCollection: Collection = this.getCollection(collection);
    return new Promise(async (resolve, reject) => {
      try {
        const findMap = {};
        findMap[field] = value;
        const userData = await mongoCollection.find(findMap).toArray();
        console.log(
          `Finding ${JSON.stringify(
            findMap
          )} in ${collection}, results: ${JSON.stringify(userData)}`
        );
        userData.length >= 1
          ? resolve(userData)
          : reject({
              message: `There is not ${JSON.stringify(findMap)}`,
              errorCode: 404,
            });
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Inserts an object to mongoDB in a specific collection
   *
   * @param {string} collection name of the collection object will be searched
   * @param {string} object object that will be inserted in mongoDB
   * @returns {Promise<any>} { acknowledged: boolean, insertedId: ObjectId } object
   * @memberof mongo.provider
   */
  public insert(collection: string, object: any): Promise<any> {
    const mongoCollection: Collection = this.getCollection(collection);
    return new Promise((resolve, reject) => {
      mongoCollection
        .insertOne(object)
        .then((result) => {
          console.log(`Inserted ${JSON.stringify(object)} into ${collection}`);
          resolve(result);
        })
        .catch((error) => {
          console.log(
            `Error inserting ${JSON.stringify(
              object
            )} inside ${collection}. Error: ${JSON.stringify(error)}`
          );
          reject(error);
        });
    });
  }

  /**
   * Delete objects from mongoDB in a specific collection
   *
   * @param {string} collection name of the collection object will be deleted
   * @param {string} field name of the field used for deleting
   * @param {string} value value of the field used for deleting
   * @returns {Promise<any>} { acknowledged: boolean, deletedCount: number }
   * @memberof mongo.provider
   */
  public delete(
    collection: string,
    field: string,
    value: string
  ): Promise<any> {
    const mongoCollection: Collection = this.getCollection(collection);
    return new Promise((resolve, reject) => {
      const deleteMap = {};
      deleteMap[field] = value;
      mongoCollection
        .deleteMany(deleteMap)
        .then((result) => {
          console.log(
            `Successfully deleted ${
              result.deletedCount
            } objects (${JSON.stringify(deleteMap)}) from ${collection}`
          );
          resolve(result);
        })
        .catch((error) => {
          console.log(
            `Error deleting ${deleteMap} from ${field}. Error: ${JSON.stringify(
              error
            )}`
          );
          reject(error);
        });
    });
  }

  /**
   * Obtains a specific collection from database
   *
   * @param {string} collectionName name of the collection to get
   * @returns {Collection} specific collection from database
   * @memberof mongo.provider
   */
  private getCollection(collectionName: string): Collection {
    if (this.operative) {
      return this._db.collection(collectionName);
    } else {
      throw new Error(
        `Error getting ${collectionName} collection. Database is not operative.`
      );
    }
  }
}
