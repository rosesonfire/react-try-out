const express = require("express");
const graphqlHTTP = require("express-graphql");
const MyGraphQLSchema = require("./schema").default;
 
const app = express();
 
app.use("/graphql", graphqlHTTP({
  schema: MyGraphQLSchema,
  graphiql: true
}));
 
app.listen(4000, () => {
  console.log("listening...");
});