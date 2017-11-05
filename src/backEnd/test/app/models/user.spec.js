/* eslint-disable no-undef */

import "./../../setup";
// mocks
import db from "../../mocks/lib/db";
// unit
import user from "./../../../main/app/models/user";

describe("User Model", () => {

  let userModel;
  let userSchema;

  before(() => {

    userModel = {};
    userSchema = {};

  });

  beforeEach(() => {

    db.model.reset();

    db.model.once().withExactArgs("user", userSchema).returns(userModel);
    
  });

  afterEach(() => {
    
    db.model.verify();
    
  });

  describe("When getting user model", () => {

    it("should return user model", () => {
      
      user(db, userSchema).should.equal(userModel);
        
    });

  });

});