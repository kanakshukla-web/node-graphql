import { IBook } from "../interfaces/Book";
import Book from '../models/book.model';

const getAllBooksFunction = async (args: any) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = Book.find();
            const books = await query.lean().exec();
            resolve(books);

        } catch (err) {
            reject(`Error fetching books: ${err}`);
        }
    });
};

const createBookFunction = async (book: IBook) => {
    return new Promise(async (resolve, reject) => {
        try {
            const newBook = new Book(book);
            await newBook.save();
            resolve(newBook);
        } catch (err) {
            reject(`Error while creating book: ${err}`);
        }
    });
};

const bookService = {
    createNewBook: createBookFunction,
    getAllBooks: getAllBooksFunction
}

export default bookService;