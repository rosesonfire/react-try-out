"use strict";

import colors from "colors";
import IoC from "electrolyte";
import setRoutes from "./routes";

// === initialize inversion of control framework ===

IoC.use(IoC.dir("dist/main/back-end/ioc"));

// ========= Console log colorization ==============

colors.setTheme({
    error: "red"
});

 // ========== Initialize mvc application ==========

const app = IoC.create("app");
const db = IoC.create("db");

setRoutes(app, db);

app.then(_app => {
    _app.listen2(function(){}, function(){});
});