// TODO: Can this be done without mutation?
export default function expressWrapper(expressApp, host, port, router) {
    
    router.setRoutes(expressApp);
    
    expressApp.listen2 = (preListenF, postListenF) => {
        expressApp.listen(
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

    return expressApp;
}