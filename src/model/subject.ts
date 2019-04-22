import { Book } from "./book";

export interface Subject {
    name: string;
    books: Book[];
}