/* eslint-disable no-undef */

import "./../../setup";
// mocks
import db from "../../mocks/lib/db";
// unit
import page from "./../../../main/app/models/page";

describe("Page Model", () => {

  let pageModel;
  let pageSchema;

  before(() => {

    pageModel = {};
    pageSchema = {};

  });

  beforeEach(() => {

    db.model.reset();

    db.model.once().withExactArgs("page", pageSchema).returns(pageModel);
    
  });

  afterEach(() => {
    
    db.model.verify();
    
  });

  describe("When getting page model", () => {

    it("should return page model", () => {
      
      page(db, pageSchema).should.equal(pageModel);
        
    });

  });

});