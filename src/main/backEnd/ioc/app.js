"use strict";

import express from "express";
import expressWrapper from './../lib/expressWrapper';
import { backEndConfig } from "./../../config";

function getApp(host, port, router) {

  const _app = express();

  const app = expressWrapper(
    _app,
    host,
    port,
    router
  );

  return app;

}

exports = module.exports = function(router) {

  let app = null;
  
  try {

    app = getApp(backEndConfig.host, backEndConfig.port, router);

  } catch (e) {
    
    console.log(e.message.error);

  }

  return app;
  
}

exports["@require"] = ["router"];
exports["@singleton"] = true;