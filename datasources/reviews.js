const { RESTDataSource } = require("apollo-datasource-rest");
const _ = require("lodash");

class ReviewsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000/reviews";
  }

  async getReviews(args) {
    const reviews = await this.get("/");
    return _.filter(reviews, args);
  }

  async getReviewsByPropertyCode(id) {
    const data = await this.get(`/${id}`);
    return data;
  }
}

module.exports = ReviewsAPI;
