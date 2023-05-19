import { usersData } from "../data";
import userService from "../services/user.service";

const getUsersFunction = async (_: any, args: any) => {
    const userData = await userService.getAllUsers(args.filter);
    console.log(userData);
    return userData;
};

const addUserFunction = async (parent: any, args: any) => {
    const user = await userService.createNewUser(args.input);
    return user;
};

const userController = {
    Query: {
        getUsers: getUsersFunction
    },
    Mutation: {
        addUser: addUserFunction
    }
}

export default userController;