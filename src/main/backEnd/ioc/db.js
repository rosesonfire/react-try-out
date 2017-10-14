"use strict";

import mongoose from 'mongoose';
import { dbConfig } from "./../../config";


exports = module.exports = function() {
  
  const connection = mongoose.createConnection(dbConfig.host, dbConfig.dbName, dbConfig.port);
  
  return connection;
  
}

exports["@singleton"] = true;