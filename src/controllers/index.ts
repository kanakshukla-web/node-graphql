import userController from "./user.controller";
import bookController from "./book.controller";

const resolvers = [
    userController,
    bookController,
];
export default resolvers;