import { Injectable } from '@angular/core';
import { PublishingCompany } from '../model/publishingCompany';
import { Book } from '../model/book';

@Injectable()

export class PublisherController {

    private publishers: PublishingCompany[];

    constructor() {
        this.initializePublishers();
    }

    //books
    private b1: Book = { name: '1984', subject: 'Literatura e Ficção', cover: '../../assets/imgs/books_we_love/1948.jpeg', authorName: 'George Orwell', publishingCompanyName: 'Companhia das Letras', isbn: '9788535914849', publication: 'Edição: 1ª (21 de julho de 2009)', pages: '416' };
    private b2: Book = { name: 'Harry Potter e a Pedra Filosofal', subject: 'Fantasia, Horror e Ficção Científica', cover: '../../assets/imgs/books_we_love/Harry_Potter_e_a_Pedra_Filosofal.jpg', authorName: 'J. K. Rowling', publishingCompanyName: 'Rocco', isbn: '9788532530783', publication: 'Edição: 1ª (19 de agosto de 2017)', pages: '208' };
    private b3: Book = { name: 'O Senhor dos Anéis', subject: 'Literatura e Ficção', cover: '../../assets/imgs/books_we_love/O_Senhor_Dos_Aneis.jpg', authorName: 'J. R. R. Tolkien', publishingCompanyName: 'Martins Fontes', isbn: '9788533613409', publication: 'Edição: Completa (3 de abril de 2000)', pages: '1211' };
    private b4: Book = { name: 'Fundação', subject: 'Ficção Científica', cover: '../../assets/imgs/books_we_love/fundacao.jpeg', authorName: 'Isaac Asimov', publishingCompanyName: 'Editora Aleph', isbn: '9788576570660', publication: '(16 de setembro de 2015)', pages: '270 ' };
    private b5: Book = { name: 'Neuromancer', subject: 'Ficção científica', cover: '../../assets/imgs/books_we_love/neuromancer.jpeg', authorName: 'William Gibson', publishingCompanyName: 'Editora Aleph', isbn: '9788576573005', publication: '(16 de setembro de 2015)', pages: '376 ' };
    private b6: Book = { name: 'O Homem do Castelo do Alto', subject: 'Aventura', cover: '../../assets/imgs/books_we_love/o_homem_do_castelo_do_alto.jpg', authorName: 'Philip K. Dick', publishingCompanyName: 'Editora Aleph', isbn: '9788576570769', publication: 'Edição: 3ª (8 de julho de 2009)', pages: '304' };
    private b7: Book = { name: 'Snow Crash', subject: 'Ficção Científica', cover: '../../assets/imgs/books_we_love/Snow_Crash.jpeg', authorName: 'Neal Stephenson', publishingCompanyName: 'Editora Aleph', isbn: '9788576572046', publication: 'Edição: 2ª (16 de março de 2015)', pages: '496' };
    private b8: Book = { name: '2001: Uma Odisséia no Espaço', subject: 'Ficção Científica', cover: '../../assets/imgs/books_we_love/uma_odisseia.png', authorName: 'Arthur Clarke', publishingCompanyName: 'Editora Aleph', isbn: '9788576571551', publication: 'Edição: 1ª (6 de agosto de 2013)', pages: '336' };
    private b9: Book = { name: 'Coraline', subject: 'Infantil e Infantojuvenil', cover: '../../assets/imgs/books_we_love/caroline.jpg', authorName: 'Neal Gaiman', publishingCompanyName: 'HarperTrophy', isbn: '978-0380807345', publication: 'Edição: Reprint, Anniversary (24 de abril de 2012)', pages: '162' };
   
    initializePublishers(): void {
        this.publishers = [];       

        //publishers
        var p1 = { name: 'Companhia das Letras', books: [this.b1] };
        var p2 = { name: 'Rocco', books: [this.b2] };
        var p3 = { name: 'Martins Fontes', books: [this.b3] };
        var p4 = { name: 'Editora Aleph', books: [this.b4, this.b5, this.b6, this.b7, this.b8] };
        var p5 = { name: 'HarperTrophy', books: [this.b9] };

        this.publishers = [p1, p2, p3, p4, p5];
    }

    getPublishers(): PublishingCompany[] {
        return this.publishers;
    }
}