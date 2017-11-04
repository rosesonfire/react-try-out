/* eslint-disable no-undef */

import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import assertArrays from "chai-arrays";
// mocks
import pageService from "../../mocks/services/pagesService";
import req from "./../../mocks/req";
import res from "./../../mocks/res";
// unit
import PageController from "./../../../main/app/controllers/pagesController";

chai.should();
chai.use(chaiAsPromised);
chai.use(assertArrays);

describe("PageController", async () => {

  const pageIds = [1,2,3];
  pageService.getPageIds.returns(pageIds);
  
  const pageController = new PageController(pageService);

  describe("When getting page ids", async () => {

    it("should return nothing", (done) => {
  
      pageController.getPageIds(req, res).should.eventually.be.undefined.notify(done);
        
    });
  
    it("should get the pages ids successfully", (done) => {
      
      res.send.callsFake((_pageIds) => {
        _pageIds.should.be.equalTo(pageIds);
        done();
      });
  
      pageController.getPageIds(req, res);
        
    });
  });

});