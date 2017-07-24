import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { T1Page } from './t1';

@NgModule({
  declarations: [
    T1Page,
  ],
  imports: [
    IonicPageModule.forChild(T1Page),
  ],
  exports: [
    T1Page
  ]
})
export class T1PageModule {}
