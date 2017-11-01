import userSchema from "./../../../dataAccess/schemas/user";

export default (db) => {

  return db.model("user", userSchema);

};