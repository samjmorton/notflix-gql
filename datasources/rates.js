const { RESTDataSource } = require("apollo-datasource-rest");
const _ = require("lodash");

class RatesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000/rates";
  }

  async getRates(args) {
    const rates = await this.get("/");
    return _.filter(rates, args);
  }

  async getRatesByRatePlanCode(ratePlanCode) {
    const data = await this.get(`/${ratePlanCode}`);
    return data;
  }
}

module.exports = RatesAPI;
