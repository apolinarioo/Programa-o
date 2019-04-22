import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilterPage } from '../filter/filter';

/**
 * Generated class for the ExplorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage {

  // filtros: any[];
  items: Array<{ title: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [
      {
        title: 'Autores',
        icon: 'ios-contact-outline'
        // types: ['Celso', 'Hamilton', 'Bonato', 'Bossini']
      }, {
        title: 'Editoras',
        icon: 'ios-people-outline'
        // types: ['Teste', 'Editora legal', 'Nice', 'São judas']
      }, {
        title: 'Assuntos',
        icon: 'ios-book-outline'
        // types: ['Romance', 'Terror', 'Textbooks', 'Kids', 'Classic Books']
      }
    ];

  }

  itemTapped(item: { title: string, icon: string }) {
    this.navCtrl.push(FilterPage, { item: item });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExplorePage');
  }

}