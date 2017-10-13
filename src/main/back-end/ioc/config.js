"use strict";

const devFile = "dev.conf";
const prodFile = "prod.conf";

const configOptions = {
  "production": devFile,
  "development": prodFile
};
const env = process.env.NODE_ENV;

const confFile = configOptions[env] || devFile;

console.log(`Setting up environment with configuration file: ${confFile}...`.green);

const config = require(`./../config/${confFile}`);

exports = module.exports = function() {

  return config;

}
   
exports["@singleton"] = true;