"use strict";

import mongooseWrapper from "./../lib/mongooseWrapper";
import { dbConfig } from "./../../config";


exports = module.exports = function() {

  let db = null;

  try {

    db = mongooseWrapper(dbConfig.host, dbConfig.dbName, dbConfig.port);

  } catch (e) {
    
    console.log(e.message.error);

  }

  return db;
  
}

exports["@singleton"] = true;