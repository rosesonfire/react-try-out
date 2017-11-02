import page from "./../../app/models/page";

exports = module.exports = (db) => {

  let Page = null;
  
  try {

    Page = page(db);

  } catch (e) {
  
    console.error(e.message.error);

  }

  return Page;
  
};
   
exports["@require"] = ["db"];
exports["@singleton"] = true;