"use strict";

import mongoose from 'mongoose';

const page = new Schema({
    id                  : ObjectId,
    name                : String,
    dateCreated         : Date,
    dateModified        : Date
});

export default page;