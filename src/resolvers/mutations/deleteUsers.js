module.exports = async (_, { id }, { models }) => {
    const deleteUser = await models.Users.deleteOne({ _id: id });
    if (deleteUser.deletedCount) return { id: id };
  };
  