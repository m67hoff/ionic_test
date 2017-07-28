import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   
  @ViewChild('map') mapElement
  map: any

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.initMap()
  } 

  initMap(){
      const latLng = new google.maps.LatLng( 50, 10 )
      
      const mapOptions: google.maps.MapOptions = {
        center: latLng,
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP 
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement,mapOptions)
  }

}
