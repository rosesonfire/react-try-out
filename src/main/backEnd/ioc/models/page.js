"use strict";

import pageSchema from "./../../../dataAccess/schemas/page";

exports = module.exports = function(db) {

  let Page = null;
  
  try {

    Page = db.model("page", pageSchema);

  } catch (e) {
    
    console.log(e.message.error);

  }

  return Page;
  
}
   
exports["@require"] = ["db"];
exports["@singleton"] = true;