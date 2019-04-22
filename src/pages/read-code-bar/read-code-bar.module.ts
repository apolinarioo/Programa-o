import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadCodeBarPage } from './read-code-bar';

@NgModule({
  declarations: [
    ReadCodeBarPage,
  ],
  imports: [
    IonicPageModule.forChild(ReadCodeBarPage),
  ],
})
export class ReadCodeBarPageModule {}
