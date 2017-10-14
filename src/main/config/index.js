"use strict";

const devFile = "dev.conf";
const prodFile = "prod.conf";
const configOptions = {
  "production": devFile,
  "development": prodFile
};
const env = process.env.NODE_ENV;
const confFile = configOptions[env] || devFile;
const config = require(`./${confFile}`);

export default config;