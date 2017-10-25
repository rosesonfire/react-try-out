"use strict";

import Router from "./../../config/router";

exports = module.exports = function(pagesController) {
  
  let router = null;
  
  try {

    router = new Router(pagesController);

  } catch (e) {
    
    console.log(e.message.error);

  }

  return router;
  
}

exports["@require"] = ["controllers/pagesController"];
exports["@singleton"] = true;