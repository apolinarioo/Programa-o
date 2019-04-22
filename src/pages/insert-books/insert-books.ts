import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the InsertBooksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insert-books',
  templateUrl: 'insert-books.html',
})
export class InsertBooksPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Agora o livro já está disponível para consulta.',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertBooksPage');
  }

}
