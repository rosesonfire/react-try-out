"use strict";

import express from "express";
import expressWrapper from './../lib/expressWrapper';
import { backEndConfig } from "./../../config";

function getApp(host, port) {

  const _app = express();

  const app = expressWrapper(
    _app,
    host,
    port
  );

  return app;

}

exports = module.exports = function() {

  const app = getApp(backEndConfig.host, backEndConfig.port);

  return app;
  
}
   
exports["@singleton"] = true;