"use strict";

import mongoose from 'mongoose';


exports = module.exports = function(config) {

  const dbConfig = config.db.connection;
  
  const connection = mongoose.createConnection(dbConfig.host, dbConfig.dbName, dbConfig.port);
  
  return connection;
  
}
   
exports["@require"] = [ "config" ];
exports["@singleton"] = true;