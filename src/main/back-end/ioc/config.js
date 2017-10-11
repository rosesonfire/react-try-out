"use strict";

const devFile = "dev.conf";
const prodFile = "prod.conf";

const configOptions = {
  "production": devFile,
  "development": prodFile
};
const env = process.env.NODE_ENV || "development";

console.log(`Setting up environment in ${env} mode...`.green);

const confFile = configOptions[env];
const config = require(`./../config/${confFile}`);

exports = module.exports = function() {

  return config;

}
   
exports["@singleton"] = true;