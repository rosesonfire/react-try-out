"use strict";

import passport from "passport";
import Router from "./../../config/router";

exports = module.exports = function(pagesController) {
  
  let router = null;
  
  try {

    router = new Router(pagesController, passport);

  } catch (e) {
    
    console.error(e.message.error);

  }

  return router;
  
}

exports["@require"] = ["controllers/pagesController"];
exports["@singleton"] = true;