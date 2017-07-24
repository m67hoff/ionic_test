import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { T2Page } from './t2';

@NgModule({
  declarations: [
    T2Page,
  ],
  imports: [
    IonicPageModule.forChild(T2Page),
  ],
  exports: [
    T2Page
  ]
})
export class T2PageModule {}
