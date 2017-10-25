"use strict";

import pageSchema from "./../../../dataAccess/schemas/page";

export default function page(db) {

    return db.model("page", pageSchema);

}