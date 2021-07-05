const { RESTDataSource } = require("apollo-datasource-rest");
const _ = require("lodash");

class PropertyAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000/properties";
  }

  async getProperties(args) {
    const properties = await this.get("/");
    return _.filter(properties, args);
  }

  async getPropertyById(id) {
    const property = await this.get(`/${id}`);
    return property;
  }

  async toggleFavoriteProperty(id) {
    const property = await this.get(`/${id}`);

    property.favorite = !property.favorite;

    await this.patch(`/${id}`, { favorite: property.favorite });

    return property;
  }
}

module.exports = PropertyAPI;
