const { User } = require('../models');

const createUser = async (data: any): Promise<any> => {
    return await User.create(data);
}

const getUsers = async (): Promise<any> => {
    return await User.findAll();
}

const getUserById = async (id: number): Promise<any> => {
    return await User.findByPk(id);
}

const deleteUser = async (id: number) => {
    try {
        const user = await User.findByPk(id)
        if (!user) {
            throw new Error('User does not exist');
        }
        await user.destroy();
    } catch (error) {
        throw error;
    }
}

module.exports = { createUser, getUsers, getUserById, deleteUser };