import { Book } from "./book";

export interface PublishingCompany {
    name: string;
    books: Book[];
}