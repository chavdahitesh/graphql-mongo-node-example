const { ApolloServer } = require("apollo-server");
const connectDB = require("./src/config/db");
const typeDefs = require("./src/types");
const resolvers = require("./src/resolvers");
const models = require("./src/models");
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models },
});

// port: process.env.PORT yet undefined but we will have this variable
// once we deployed to heroku
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server is ready at ${url}`);
  connectDB();
});
