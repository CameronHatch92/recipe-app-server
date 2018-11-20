const {GraphQLServer} = require('graphql-yoga');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const {DATABASE_URL, JWT_SECRET} = require('./config');
const typeDefs = './src/schema.graphql';
const Query = require('./resolvers/query');
const Mutation = require('./resolvers/mutations');

const resolvers = {
  Query,
  Mutation
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: incomingData => ({
    incomingData,
    isAuthorized: () => {
      const AuthHeader = incomingData.request.header('authorization');
      if(!AuthHeader){
        throw('Unauthorized');
      }
      const token = AuthHeader.replace('Bearer', '');
      const decodedToken = jwt.verify(token, JWT_SECRET);
      return decodedToken;
    }
  })
});

if(require.main === module){
  mongoose.connect(DATABASE_URL, {useNewUrlParser: true});
  server.start({endpoint: '/graphql'},() => console.log('Server is running'));
}