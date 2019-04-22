import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Book } from '../../model/book';

/**
 * Generated class for the BookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {

  public book: Book;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.book = navParams.get("book");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookPage');
  }

}
