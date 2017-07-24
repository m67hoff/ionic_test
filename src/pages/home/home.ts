import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab1Root = 'T1Page';
  tab2Root = 'T2Page';
  constructor(public navCtrl: NavController) {

  }

}
