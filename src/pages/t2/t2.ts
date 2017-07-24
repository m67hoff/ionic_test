import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Pro1Provider } from '../../providers/pro1/pro1'

@IonicPage()
@Component({
  selector: 'page-t2',
  templateUrl: 't2.html',
})
export class T2Page {

  data: string

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pro1: Pro1Provider,
  ) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter T2Page');
    this.data = this.pro1.getS()
  }

  set(s) {
    this.data = s
    this.pro1.setS(s)
    console.log('set T2');
  }
}
