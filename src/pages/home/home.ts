import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef
  @ViewChild('directionsPanel') directionsPanel: ElementRef

  map: any

  constructor(
    public navCtrl: NavController,
    public geolocation: Geolocation
  ) {

  }

  ionViewDidLoad() {
    this.initMap()
    this.startNavigating()
  }

  initMap() {

    let latLngHeidelberg = new google.maps.LatLng(49.4, 8.67)
    let latLngCur: google.maps.LatLng

    this.geolocation.getCurrentPosition().then(
      (position) => {
        latLngCur = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
        console.log("Got current Pos: " + latLngCur)
      }, (err) => {
        console.log("Error geolocation.")
        console.log(err)
      }
    )

    let mapOptions = {
      center: latLngHeidelberg,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: false,
      fullscreenControl: false
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  startNavigating() {

    let directionsDisplay = new google.maps.DirectionsRenderer;

    directionsDisplay.setMap(this.map);
    directionsDisplay.setPanel(this.directionsPanel.nativeElement);


    let directionsService = new google.maps.DirectionsService;

    directionsService.route({
      origin: 'Heidelberg',
      destination: 'Heidelberg, Schwarzwaldstr 56',
      travelMode: google.maps.TravelMode['DRIVING']
    }, (res, status) => {

      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(res);
      } else {
        console.warn(status);
      }

    });

  }

  listExpand() {
    let x = this.directionsPanel.nativeElement;
    if (x.style.display == 'none')
      x.style.display = 'block';
    else
      x.style.display = 'none';
  }


  addMarker() {

    let marker = new google.maps.Marker({
      map: this.map,
      // animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>Information!</h4>";
    this.addInfoWindow(marker, content);
  }

  addInfoWindow(marker, content) {

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

}
