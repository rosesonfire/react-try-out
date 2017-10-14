"use strict";

import colors from "colors";
import IoC from "electrolyte";

// === initialize inversion of control framework ===

IoC.use(IoC.dir("dist/main/backEnd/ioc"));

// ========= Console log colorization ==============

colors.setTheme({
    error: "red"
});

// ========== Initialize mvc application ==========

const app = IoC.create("app");

app.then(_app => {
    
    _app.listen2(function(){}, function(){});
    
});