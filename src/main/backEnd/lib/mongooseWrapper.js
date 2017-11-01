"use strict";

// TODO: Can this be done without mutation?
export default (mongoose, host, dbName, port) => {
    
    mongoose.Promise = Promise;
    
    const db = mongoose.createConnection(host, dbName, port);

    return db;
}