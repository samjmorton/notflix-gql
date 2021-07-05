const { ApolloServer } = require("apollo-server");

// TypeDefs
const typeDefs = require("./schema.js");

// DataSource
const PropertyAPI = require("./datasources/properties");
const ReviewsAPI = require("./datasources/reviews");
const RatesAPI = require("./datasources/rates");
const UsersAPI = require("./datasources/users");

const dataSources = () => ({
  PropertyAPI: new PropertyAPI(),
  RatesAPI: new RatesAPI(),
  ReviewsAPI: new ReviewsAPI(),
	UsersAPI: new UsersAPI(),
});

//Resolvers
const resolvers = require("./resolvers.js");

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen({ port: 4000 });
