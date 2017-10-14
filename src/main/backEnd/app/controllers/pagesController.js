"use strict";

export default class PagesController {

    constructor(pagesService) {

        this.pagesService = pagesService;
        
    }

    getPageIds() {
        
        const pageIds = this.pagesService.getPageIds();

        return pageIds;
        
    }
}