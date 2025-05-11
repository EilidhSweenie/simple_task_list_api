import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from "@apollo/server/standalone";
import {resolve} from 'path';
import { readFileSync } from "fs";
import { gql } from "graphql-tag";
import resolvers from './resolvers.js';

const typeDefs = gql(
    readFileSync(resolve(".", "./src/schema.graphql"), {
      encoding: "utf-8",
    })
  );

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers,
  });


const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
  
console.log(`🚀  Server ready at: ${url}`);