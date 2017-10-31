"use strict";

import { combineReducers } from "redux";
import pages from "./pages";
import fb from "./fb";

const reducers = combineReducers({
    pages,
    fb
});

export default reducers;
