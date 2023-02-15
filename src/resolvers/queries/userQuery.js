module.exports = async (_, {}, { models }) => {
  return await models.users.find();
};
