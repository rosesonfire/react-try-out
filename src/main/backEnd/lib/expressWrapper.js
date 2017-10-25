// TODO: Can this be done without mutation?
export default function expressWrapper(app, host, port, middlewares, router) {
    
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