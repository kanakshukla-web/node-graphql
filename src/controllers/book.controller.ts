import { booksData } from "../data";
import bookService from "../services/book.service";

const getBooksFunction = async (parent: any, args: any) => {
    const booksData = await bookService.getAllBooks(args);
    console.log(booksData);
    return booksData;
}

const addBookFunction = async (parent: any, args: any) => {
    const book = await bookService.createNewBook(args.input);
    return book;
};

const bookController = {
    Query: {
        getBooks: getBooksFunction
    },
    Mutation: {
        addBook: addBookFunction
    }
}

export default bookController;