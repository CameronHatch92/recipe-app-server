const {GraphQLServer} = require('graphql-yoga');
const mongoose = require('mongoose');

const {DATABASE_URL} = require('./config');
const typeDefs = './src/schema.graphql';
const Query = require('./resolvers/query');
const Mutation = require('./resolvers/mutations');

const resolvers = {
  Query,
  Mutation
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

if(require.main === module){
  mongoose.connect(DATABASE_URL, {useNewUrlParser: true});
  server.start({endpoint: '/graphql'},() => console.log('Server is running'));
}