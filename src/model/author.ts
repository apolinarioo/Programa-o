import { Book } from "./book";

export interface Author {
    name: string;
    books: Book[];
}