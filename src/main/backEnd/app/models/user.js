"use strict";

import userSchema from "./../../../dataAccess/schemas/user";

export default function page(db) {

    return db.model("user", userSchema);

}