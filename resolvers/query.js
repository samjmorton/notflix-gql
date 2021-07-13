module.exports = {
  properties: (parent, args, { dataSources }, info) =>
    dataSources.PropertyAPI.getProperties(args),

  propertyById: (parent, { id }, { dataSources }, info) =>
    dataSources.PropertyAPI.getPropertyById(id),

  rates: (parent, args, { dataSources }, info) =>
    dataSources.RatesAPI.getRates(args),

  ratesByRatePlanCode: (parent, { ratePlanCode }, { dataSources }, info) =>
    dataSources.RatesAPI.getRatesByRatePlanCode(ratePlanCode),

  reviews: (parent, args, { dataSources }, info) =>
    dataSources.ReviewsAPI.getReviews(args),

  reviewsByPropertyCode: (parent, { propertyCode }, { dataSources }, info) =>
    dataSources.ReviewsAPI.getReviewsByPropertyCode(propertyCode),

	profile: (parent, {userName}, { dataSources }, info) =>
		dataSources.UsersAPI.getUser(userName),
};
