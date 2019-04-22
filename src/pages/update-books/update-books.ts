import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalUpdatePage } from '../modal-update/modal-update';
import { BooksController } from '../../controller/booksController';
import { Book } from '../../model/book';

/**
 * Generated class for the UpdateBooksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-books',
  templateUrl: 'update-books.html',
})
export class UpdateBooksPage {

  items: Array<string>;
  public books: Book[];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public modalCtrl: ModalController, public booksCtrl: BooksController) {
    this.initializeItems();
  }

  initializeItems() {
    // this.items = ['Book 1', 'Book 2', 'Book 3', 'Book 4', 'Book 5'];
    this.books = this.booksCtrl.getBooksWeLove();
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.books = this.books.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  openModal(item: any) {
    let modal = this.modalCtrl.create(ModalUpdatePage, item);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateBooksPage');
  }

}