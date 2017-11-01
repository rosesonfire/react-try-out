"use strict";

import pageSchema from "./../../../dataAccess/schemas/page";

export default (db) => {

    return db.model("page", pageSchema);

}