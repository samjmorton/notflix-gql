const _ = require("lodash");

module.exports = {
  async rates(property, args, { dataSources }, info) {
    const rates = await dataSources.RatesAPI.getRates(args);
    return rates.filter((rate) =>
      _.includes(property.rates, rate.ratePlanCode)
    );
  },

  async reviews(property, args, { dataSources }, info) {
    const reviews = await dataSources.ReviewsAPI.getReviews(args);
    return reviews.filter((review) => review.ProductId === property.id);
  },
};
