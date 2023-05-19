import { IBook } from '../interfaces/Book';
import mongoose, { Schema, Document } from 'mongoose';

const BookSchema: Schema = new Schema({
    title: { type: String, required: true, unique: true, index: true },
    author: { type: String, required: true },
    createdOn: { type: Date, default: null },
    updatedOn: { type: Date, default: null }
});

export default mongoose.model<IBook & Document>('Book', BookSchema);
