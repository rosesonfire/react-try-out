/* eslint-disable no-undef */

import { expect } from "./../../setup";
// mocks
import pageService from "../../mocks/services/pagesService";
import req from "./../../mocks/req";
import res from "./../../mocks/res";
// unit
import PageController from "./../../../main/app/controllers/pagesController";

describe("PageController", () => {

  let pageIds;
  let pageController;

  before(() => {

    pageIds = [1,2,3];

    pageService.getPageIds.returns(pageIds);    

    pageController = new PageController(pageService);

  });

  beforeEach(() => {

    res.send.reset();
    
  });

  describe("When getting page ids", () => {

    it("should return nothing", async () => {
  
      expect(await pageController.getPageIds(req, res)).to.be.undefined;
        
    });
  
    it("should get the correct pages ids", async () => {
      
      res.send.withExactArgs(pageIds);  
      await pageController.getPageIds(req, res);
        
    });
  });

});