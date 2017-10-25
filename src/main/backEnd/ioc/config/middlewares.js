"use strict";

import Middlewares from "./../../config/middlewares";

exports = module.exports = function() {

  let middlewares = null;
  
  try {

    middlewares = new Middlewares();

  } catch (e) {
    
    console.log(e.message.error);

  }

  return middlewares;
  
}

exports["@singleton"] = true;