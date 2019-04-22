import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeleteBooksPage } from './delete-books';

@NgModule({
  declarations: [
    DeleteBooksPage,
  ],
  imports: [
    IonicPageModule.forChild(DeleteBooksPage),
  ],
})
export class DeleteBooksPageModule {}
