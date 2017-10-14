"use strict";

import PagesService from "./../../app/services/pagesService";

exports = module.exports = function(Page) {

  let pagesService = null;
  
  try {

    pagesService = new PagesService(Page);

  } catch (e) {
    
    console.log(e.message.error);

  }

  return pagesService;
  
}
   
exports["@require"] = ["models/page"];
exports["@singleton"] = true;