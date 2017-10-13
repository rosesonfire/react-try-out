"use strict";

import { MongoClient } from 'mongodb';
import assert from 'assert';


function getDB(host, port, dbName) {

    const url = `mongodb://${host}:${port}/${dbName}`;

    const db = MongoClient.connect(url);

    return db;

}

exports = module.exports = function(config) {

  const dbConfig = config.db.connection;
  const db = getDB(dbConfig.host, dbConfig.port, dbConfig.dbName);

  return db;
  
}
   
exports["@require"] = [ "config" ];
exports["@singleton"] = true;