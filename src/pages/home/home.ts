import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
    apple: any;
    banana: any;
 
    constructor(public navCtrl: NavController, public storage: Storage) {
 
    }
 
    ionViewDidLoad(){
 
        this.getFromStorageStandard().then((result) => {
            this.apple = result;
        });
        
        this.banana = this.getFromStorageAsync();
 
    }
 
    setInStorage(){
        this.storage.set('apple', '3.99');
        this.storage.set('banana', '4.50');
    }
 
    getFromStorageStandard(){
 
        return this.storage.get('apple');
 
    }
 
    async getFromStorageAsync(){
 
        return await this.storage.get('banana');
 
    }
 
}