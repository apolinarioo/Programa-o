import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateBooksPage } from './update-books';

@NgModule({
  declarations: [
    UpdateBooksPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateBooksPage),
  ],
})
export class UpdateBooksPageModule {}
