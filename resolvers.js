const QueryTypeDef = require("./resolvers/query");
const MutationTypeDef = require("./resolvers/mutation");
const PropertyTypeDef = require("./resolvers/property");

module.exports = {
  Query: QueryTypeDef,
  Mutation: MutationTypeDef,
  Property: PropertyTypeDef,
};
