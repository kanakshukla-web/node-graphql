import { bookSchema } from "./book.schema";
import { userSchema } from "./user.schema";

const typeDefs = [
    bookSchema,
    userSchema
];

export default typeDefs;