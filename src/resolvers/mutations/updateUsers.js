
module.exports = async (_, {id, input}, {models}) => {
    const UserToUpdate = await models.Users.findOne({_id: id});

    Object.keys(input).forEach(value => {
        UserToUpdate[value] = input[value];
    });

    const updatedUser = await UserToUpdate.save();
    return updatedUser;
}