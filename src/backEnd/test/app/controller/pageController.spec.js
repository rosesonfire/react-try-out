/* eslint-disable no-undef */

import { expect } from "./../../setup";
// mocks
import pageService from "../../mocks/app/services/pagesService";
import req from "./../../mocks/others/express/req";
import res from "./../../mocks/others/express/res";
// unit
import PageController from "./../../../main/app/controllers/pagesController";

describe("Page Controller", () => {

  let pageIds;
  let pageController;

  before(() => {

    pageIds = [1,2,3];

    pageController = new PageController(pageService);

  });

  beforeEach(() => {

    pageService.getPageIds.reset();
    res.send.reset();

    pageService.getPageIds.once().withExactArgs().resolves(pageIds);
    res.send.once().withExactArgs(pageIds);
    
  });

  afterEach(() => {

    pageService.getPageIds.verify();
    res.send.verify();
    
  });

  describe("When getting page ids", () => {

    it("should return nothing", async () => {
  
      expect(await pageController.getPageIds(req, res)).to.be.undefined;
        
    });

  });

});