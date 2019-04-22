import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Book } from '../../model/book';

/**
 * Generated class for the ModalUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-update',
  templateUrl: 'modal-update.html',
})
export class ModalUpdatePage {

  public book: Book;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public viewCtrl: ViewController, public alertCtrl: AlertController) {
    this.book = navParams.get("book");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalUpdatePage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  showAlertUpdate() {
    const alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Os dados do livro foram alterados.',
      buttons: ['OK']
    });
    alert.present();
    this.dismiss();
  }

}