"use strict";

import expressWrapper from "./../lib/expressWrapper";
import { backEndConfig } from "./../../config";

exports = module.exports = function(middlewares, router) {

  let app = null;
  
  try {

    app = expressWrapper(backEndConfig.host, backEndConfig.port, middlewares, router);

  } catch (e) {
    
    console.log(e.message.error);

  }

  return app;
  
}

exports["@require"] = ["config/middlewares", "config/router"];
exports["@singleton"] = true;