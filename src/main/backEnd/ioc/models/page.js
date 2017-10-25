"use strict";

import page from "./../../app/models/page";

exports = module.exports = function(db) {

  let Page = null;
  
  try {

    Page = page(db);

  } catch (e) {
    
    console.log(e.message.error);

  }

  return Page;
  
}
   
exports["@require"] = ["db"];
exports["@singleton"] = true;