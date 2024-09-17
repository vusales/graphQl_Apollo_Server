import { ApolloServer } from '@apollo/server'; 
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';


// server yaradiriq 
// ***
// creating server 
const server = new ApolloServer({
    typeDefs ,
    resolvers
});


// express app yaradir 
// apollo server instance  midleware kimi install edir
// gelen sorgulari qebul etmek ucun appi hazirlayir 
// ***
// creates an express app
// installs your ApolloServer instance as middleware
// prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});


console.log(`🚀  Server ready at: ${url}`);
  