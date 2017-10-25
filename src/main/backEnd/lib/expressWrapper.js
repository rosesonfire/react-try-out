"use strict";

import express from "express";

// TODO: Can this be done without mutation?
export default function expressWrapper(host, port, middlewares, router) {
    
    const app = express();
    
    middlewares.setMiddlewares(app);
    router.setRoutes(app);
    
    app.listen2 = (preListenF, postListenF) => {
        app.listen(
            port,
            host,
            function() {
              console.log("Starting server...");
              preListenF();
            },
            function() {
              console.log(`Started server at (${host}, ${port})...`);
              postListenF();
            }
        );
    }

    return app;
}