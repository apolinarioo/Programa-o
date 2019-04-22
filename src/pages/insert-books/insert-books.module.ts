import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsertBooksPage } from './insert-books';

@NgModule({
  declarations: [
    InsertBooksPage,
  ],
  imports: [
    IonicPageModule.forChild(InsertBooksPage),
  ],
})
export class InsertBooksPageModule {}
