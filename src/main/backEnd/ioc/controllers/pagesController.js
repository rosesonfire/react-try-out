"use strict";

import PagesController from "./../../app/controllers/pagesController";

exports = module.exports = function(pagesService) {

  let pagesController = null;
  
  try {

    pagesController = new PagesController(pagesService);

  } catch (e) {
    
    console.log(e.message.error);

  }

  return pagesController;
  
}
   
exports["@require"] = ["services/pagesService"];
exports["@singleton"] = true;