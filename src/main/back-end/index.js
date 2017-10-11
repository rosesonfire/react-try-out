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

setRoutes(app);

const host = app.get("host");
const port = app.get("port");

app.listen(
    port,
    host,
    function() {
        console.log("Starting server ...");
    },
    function() {
        console.log(`Started server at (${host}, ${port}) ...`);
    }
);