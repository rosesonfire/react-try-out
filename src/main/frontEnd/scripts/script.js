"use strict";

import { trackAuth, getAuthKey, fbAPI } from './fb';

window.trackAuth = trackAuth;
window.getAuthKey = getAuthKey;
window.fbAPI = fbAPI;

console.log("all custom scripts loaded!!!");