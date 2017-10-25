"use strict";

import passport from 'passport';

export default class Router {

    constructor(pagesController) {
    
        this.pagesController = pagesController;

    }

    setRoutes(app) {

        app.get(
            "^/service/permissions/pages$",
            this.pagesController.getPageIds.bind(this.pagesController)
        );
    
        app.get("^/$", function(req, res){

            res.status(404).send("Not found!");

        })
    
        app.get("*", function(req, res){

            res.redirect("/");
            
        });
    }
}