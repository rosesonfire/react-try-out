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
    
  });

  describe("When getting user model", () => {

    it("should return user model", () => {
  
      db.model.withExactArgs("user", userSchema);
      db.model.returns(userModel);
      
      user(db, userSchema).should.equal(userModel);
        
    });

  });

});