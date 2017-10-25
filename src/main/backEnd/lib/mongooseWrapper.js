"use strict";

// TODO: Can this be done without mutation?
export default function mongooseWrapper(mongoose, host, dbName, port) {
    
    mongoose.Promise = Promise;
    
    const db = mongoose.createConnection(host, dbName, port);

    return db;
}