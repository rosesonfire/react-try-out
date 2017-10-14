"use strict";

import express from "express";
import expressWrapper from './../lib/expressWrapper';

function getApp(host, port) {

  const _app = express();

  const app = expressWrapper(
    _app,
    host,
    port
  );

  return app;

}

exports = module.exports = function(config) {

  const serverConfig = config.backEnd.server;
  const app = getApp(serverConfig.host, serverConfig.port);

  return app;
  
}
   
exports["@require"] = [ "config" ];
exports["@singleton"] = true;