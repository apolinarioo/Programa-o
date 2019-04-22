import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { BooksController } from '../../controller/booksController';
import { Book } from '../../model/book';

/**
 * Generated class for the DeleteBooksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delete-books',
  templateUrl: 'delete-books.html',
})
export class DeleteBooksPage {

  public books: Book[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public alertCtrl: AlertController, public booksCtrl: BooksController) {
    this.initializeItems();
  }

  initializeItems() {
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

  showConfirm(book: Book) {
    const confirm = this.alertCtrl.create({
      title: 'Excluir: '+book.name,
      message: 'Tem certeza de que deseja excluir este livro?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.showAlert();
            // Reset items back to all of the items
            this.initializeItems();
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Livro Excluído!!',
      subTitle: 'Atenção: O livro foi excluído e não está mais disponível para consulta.',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeleteBooksPage');
  }

}