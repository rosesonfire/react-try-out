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

async function initialize() {

    const app = await IoC.create("app");
    
    app.listen2(function(){}, function(){});
    
}
    
initialize().catch(err => {
    console.error(err.message.error);
});