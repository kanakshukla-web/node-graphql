import { IUser } from "../interfaces/User";
import User from '../models/user.model';

const getAllUsersFunction = async (filter: any = {}) => {
    return new Promise(async (resolve, reject) => {
        try {
            // const query = User.find();
            // const users = await query.lean().exec();
            // resolve(users);

            const query = User.find();

            const { name } = filter;

            if (name) {
                query.where("name").regex(new RegExp(name, "i"))
            }

            const count = await User.countDocuments(query).exec();
            const users = await query.lean().exec();

            resolve(users);

        } catch (err) {
            reject(`Error fetching users: ${err}`);
        }
    });
};

const createUserFunction = async (user: IUser) => {
    return new Promise(async (resolve, reject) => {
        try {
            const newUser = new User(user);
            await newUser.save();
            resolve(newUser);
        } catch (err) {
            reject(`Error while creating user: ${err}`);
        }
    });
};

const userService = {
    createNewUser: createUserFunction,
    getAllUsers: getAllUsersFunction
}

export default userService;