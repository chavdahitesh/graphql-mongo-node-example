module.exports = async (_, { input }, { models }) => {
    console.log("new user=>>",input);
  newUsers = await models.users.create(input);
  return newUsers;
};
