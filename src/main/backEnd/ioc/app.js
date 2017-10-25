"use strict";

import express from "express";
import expressWrapper from "./../lib/expressWrapper";
import { backEndConfig } from "./../../config";

function getApp(host, port, middlewares, router) {

  const _app = express();

  const app = expressWrapper(
    _app,
    host,
    port,
    middlewares,
    router
  );

  return app;

}

exports = module.exports = function(middlewares, router) {

  let app = null;
  
  try {

    app = getApp(backEndConfig.host, backEndConfig.port, middlewares, router);

  } catch (e) {
    
    console.log(e.message.error);

  }

  return app;
  
}

exports["@require"] = ["config/middlewares", "config/router"];
exports["@singleton"] = true;