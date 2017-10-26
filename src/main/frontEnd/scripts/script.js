"use strict";

import { trackAuth, getAuthKey } from './auth';

window.trackAuth = trackAuth;
window.getAuthKey = getAuthKey;

console.log("all custom scripts loaded!!!");