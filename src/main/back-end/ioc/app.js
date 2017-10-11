"use strict";

import express from "express";

function getApp(host, port) {

  const app = express();
  
  app.set("host", host);
  app.set("port", port);

  return app;

}

exports = module.exports = function(config) {

  const serverConfig = config.app.server;
  const app = getApp(serverConfig.host, serverConfig.port);

  return app;
  
}
   
exports["@require"] = [ "config" ];
exports["@singleton"] = true;