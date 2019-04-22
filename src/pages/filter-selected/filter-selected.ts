import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Book } from '../../model/book';
import { BookPage } from '../book/book';

/**
 * Generated class for the FilterSelectedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter-selected',
  templateUrl: 'filter-selected.html',
})
export class FilterSelectedPage {

  public item: any;
  public books: Book[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.data);
    this.item = this.navParams.get('item');
    this.initializeItems();
  }  
  
  initializeItems(): void {
    this.books = this.item.books;
  }

  getItems(ev: any): void {
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
  
  goToBook(book: Book): void {
    this.navCtrl.push(BookPage, { book: book } );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterSelectedPage');
  }

}