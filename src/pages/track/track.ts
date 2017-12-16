import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IonicPage, NavController,MenuController, NavParams, Platform } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth.service';
import { Profile } from '../../models/profile/profile.interface';
import { Track } from '../../models/tracks/tracks.interface';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-track',
  templateUrl: 'track.html',
})
export class TrackPage implements OnInit {

  mapReady: boolean = false;
  map: GoogleMap;
  mapElement: any;

  authenticate: Boolean;
  track = {} as Track;

  constructor(private auth: AuthService, private navCtrl: NavController, private navParams: NavParams,public menuController: MenuController) {

    // https://forum.ionicframework.com/t/google-maps-making-sidemenu-unusable/69237/22
    /*let leftMenu = menuController.get(); //  menuController.get('left');

    if (leftMenu) {
      leftMenu.ionOpen.subscribe(() => {
        console.log('Menu opened');
        if (this.map) {
          this.map.setClickable(false);
        }
      });

      leftMenu.ionClose.subscribe(() => {
        console.log('Menu closed');
        if (this.map) {
          this.map.setClickable(true);
        }
      });
    }*/
  }

  ionViewDidLoad(){
    setTimeout(()=>{
      this.loadMap();
    }, 1000)
  }

  loadMap() {

    let mapOptions: GoogleMapOptions = {
  camera: {
    target: {
      lat: -23.5690622,
      lng: -46.7289294
    },
    zoom: 18,
    tilt: 30
  }
};

    // Create a map after the view is loaded.
    // (platform is already ready in app.component.ts)
    this.map = GoogleMaps.create('map_canvas',mapOptions);
    this.map.setVisible(true);
    // Wait the maps plugin is ready until the MAP_READY event
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      this.mapReady = true;
      console.log('map is ready to use.');
    });
  }

  onButtonClick() {
    if (!this.mapReady) {
      console.log("Map not ready")
      return;
    }
    this.map.clear();

    // Get the location of you
    this.map.getMyLocation()
      .then((location: MyLocation) => {
        console.log(JSON.stringify(location, null ,2));

        // Move the map camera to the location with animation
        return this.map.animateCamera({
          target: location.latLng,
          zoom: 17,
          tilt: 30
        }).then(() => {
          // add a marker
          return this.map.addMarker({
            title: '@ionic-native/google-maps plugin!',
            snippet: 'This plugin is awesome!',
            position: location.latLng,
            animation: GoogleMapsAnimation.BOUNCE
          });
        })
      }).then((marker: Marker) => {
        // show the infoWindow
        marker.showInfoWindow();

      });
  }


  ngOnInit(): void{
    this.auth.getAuthenticatedUser().subscribe(auth => {
        !auth? this.authenticate = false: this.authenticate = true;
    });

  }

  showTrack(track: Track){
    this.track = track;
    console.log('Funciona pelo amor de deus: ',this.track);
    //Agora é só printar o mapa demarcado na rela


  }

}
