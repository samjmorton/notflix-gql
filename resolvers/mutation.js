module.exports = {
  toggleFavoriteProperty: (parent, { id }, { dataSources }, info) =>
    dataSources.PropertyAPI.toggleFavoriteProperty(id),
};
