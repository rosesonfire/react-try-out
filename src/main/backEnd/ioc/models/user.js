"use strict";

import user from "./../../app/models/user";

exports = module.exports = function(db) {

  let User = null;
  
  try {

    User = user(db);

  } catch (e) {
    
    console.error(e.message.error);

  }

  return User;
  
}
   
exports["@require"] = ["db"];
exports["@singleton"] = true;