import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalUpdatePage } from './modal-update';

@NgModule({
  declarations: [
    ModalUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalUpdatePage),
  ],
})
export class ModalUpdatePageModule {}
