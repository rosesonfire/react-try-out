"use strict";

import config from "./../config";

const dbConfig = config.db.connection;

module.exports = {
    dbConnectionUri: `mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.dbName}/migrations`,
    autosync: true,
    es6: true
}