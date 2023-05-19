import { Date } from "mongoose";

export interface IBook {
    title: string;
    author: string;
    createdOn?: Date;
    updatedOn?: Date;
}