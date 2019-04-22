import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Book } from '../../model/book';
import { BookPage } from '../book/book';
import { BooksController } from '../../controller/booksController';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public booksWeLove: Book[];
  public booksClassic: Book[];
  public booksRomance: Book[];
  public booksKids: Book[];
  public booksTextbook: Book[];

  constructor(public navCtrl: NavController, public booksCtrl: BooksController) {
    this.booksWeLove = booksCtrl.getBooksWeLove();
    this.booksClassic = booksCtrl.getBooksClassic();
    this.booksRomance = booksCtrl.getBooksRomance();
    this.booksKids = booksCtrl.getBooksKids();
    this.booksTextbook = booksCtrl.getBooksTextbook();
  }

  goToBook(book: Book): void {
    this.navCtrl.push(BookPage, { book: book });
  }

}