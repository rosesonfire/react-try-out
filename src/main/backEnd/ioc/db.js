"use strict";

import mongoose from 'mongoose';
import { dbConfig } from "./../../config";


exports = module.exports = function() {

  let db = null;

  try {

    db = mongoose.createConnection(dbConfig.host, dbConfig.dbName, dbConfig.port);    

  } catch (e) {
    
    console.log(e.message.error);

  }

  return db;
  
}

exports["@singleton"] = true;