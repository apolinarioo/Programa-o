import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilterSelectedPage } from '../filter-selected/filter-selected';
import { AuthorController } from '../../controller/authorController';
import { SubjectController } from '../../controller/subjectController';
import { PublisherController } from '../../controller/publisherController';

/**
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {

  public items: any[];
  public filter: { title: string, icon: string };

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public authorCtrl: AuthorController, public subCtrl: SubjectController, 
    public pubCtrl: PublisherController) {
    console.log(navParams.data);
    this.filter = navParams.get("item");
    this.initializeItems();
  }

  initializeItems(): void {
    if (this.filter.title == 'Autores') {
      this.items = this.authorCtrl.getAuthors();
      console.log(this.items);
    } else if (this.filter.title == 'Editoras') {
      this.items = this.pubCtrl.getPublishers();
      console.log(this.items);
    } else if (this.filter.title == 'Assuntos') {
      this.items = this.subCtrl.getSubjects();
      console.log(this.items);
    }
  }

  getItems(ev: any): void {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  goFilterSelected(item: any) {
    this.navCtrl.push(FilterSelectedPage, { item: item });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
  }

}