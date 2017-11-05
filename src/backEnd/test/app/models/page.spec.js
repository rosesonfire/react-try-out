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
    
  });

  describe("When getting page model", () => {

    it("should return page model", () => {
  
      db.model.withExactArgs("page", pageSchema);
      db.model.returns(pageModel);
      
      page(db, pageSchema).should.equal(pageModel);
        
    });

  });

});