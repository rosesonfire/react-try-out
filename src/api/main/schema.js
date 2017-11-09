import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString
} from "graphql";

import fetch, { Headers } from "node-fetch";

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      pages: {
        type: new GraphQLList(GraphQLString),
        resolve: async () => {
          
          const res = await fetch("http://localhost:8080/service/pages", {
            method: "GET",
            headers: new Headers({
              authentication: "helloworld"
            })
          });
          
          if (res.status !== 200) {

            throw new Error("http error", res.status);
            
          }

          const data = await res.json();
          
          return data;

        }
      }
    }
  })
});