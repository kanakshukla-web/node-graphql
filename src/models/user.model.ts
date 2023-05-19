import { IUser } from '../interfaces/User';
import mongoose, { Schema, Document } from 'mongoose';

const UserSchema: Schema = new Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    createdOn: { type: Date, default: null },
    updatedOn: { type: Date, default: null }
});

export default mongoose.model<IUser & Document>('User', UserSchema);
