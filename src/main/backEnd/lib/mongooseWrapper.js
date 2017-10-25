"use strict";

import mongoose from "mongoose";

// TODO: Can this be done without mutation?
export default function mongooseWrapper(host, dbName, port) {
    
    mongoose.Promise = Promise;
    
    const db = mongoose.createConnection(host, dbName, port);

    return db;
}