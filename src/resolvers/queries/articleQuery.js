module.exports = async (_, {}, { models }) => {
  return await models.articles.find();
};
