/* eslint-disable no-undef */

import "./../../setup";
// mocks
import Page from "../../mocks/app/models/page";
// unit
import PageService from "./../../../main/app/services/pagesService";

describe("Page Service", () => {

  let pageIds;
  let pages;
  let pageService;

  before(() => {

    pageIds = [1, 2, 3 ];
    pages = pageIds.map(pageId => { 

      return {id: pageId };

    });

    pageService = new PageService(Page);

  });

  beforeEach(() => {

    Page.find.reset();

    Page.find.once().withExactArgs().resolves(pages);
    
  });

  afterEach(() => {
    
    Page.find.verify();
    
  });

  describe("When getting page ids", () => {

    it("should return correct pages ids", async () => {

      (await pageService.getPageIds()).should.be.equalTo(pageIds);
        
    });
  });

});