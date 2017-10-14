"use strict";

export default class Router {

    constructor(pagesController) {
    
        this.pagesController = pagesController;

    }

    setRoutes(app) {

        const pagesController = this.pagesController;

        app.get("^/service/permissions/pages$", async function(req, res) {

            const pageIds = await pagesController.getPageIds();
            
            res.send(pageIds);

        });
    
        app.get("^/$", function(req, res){

            res.status(404).send("Not found!");

        })
    
        app.get("*", function(req, res){

            res.redirect("/");
            
        });
    }
}