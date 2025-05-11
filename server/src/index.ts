import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from './schema.js';

// Declare a new Apollo Server
const server = new ApolloServer({
    schema
  });

// Run a standalone server on port 4000
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
  
console.log(`🚀  Server ready at: ${url}`);