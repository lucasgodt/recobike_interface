import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth.service';
import { Profile } from '../../models/profile//profile.interface';
import { Track } from "../../models/tracks/tracks.interface";
import { Coordenada } from "../../models/coordenada/coordenada.interface";
import { Geolocation,Geoposition } from '@ionic-native/geolocation';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage implements OnInit {

  authenticate: Boolean;
  capturar: Boolean;
  private observador: Observable<Geoposition>;
  private subscription;


  coordenada: Coordenada = {
    latitude : 0,
    longitude : 0
  };

  latlong: Coordenada[] = [];

  track: Track = {
    coordenadas: this.latlong,
    trackId: 0,
    trackRating: 0
  };

  constructor(private auth: AuthService, private navCtrl: NavController, private navParams: NavParams, private geolocation: Geolocation) {
    this.capturar = false;
    this.observador = this.geolocation.watchPosition(/*{enableHighAccuracy : true}*/)
                            .filter((p) => p.coords !== undefined) //Filter Out Errors
  }

  if(capturar=true){

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
      this.coordenada.latitude=data.coords.latitude;
      this.coordenada.longitude=data.coords.longitude;
      this.latlong.push(this.coordenada);
    });

  }

  openProfile(profile: Profile){
    this.navCtrl.push('ProfilePage',{ profile });
  }

  ngOnInit(): void{
    this.auth.getAuthenticatedUser().subscribe(auth => {
        !auth? this.authenticate = false: this.authenticate = true;
    });
  }

  navigateToPage(pageName: string):void{
    this.navCtrl.push(pageName);
    console.log(this.track)
  }

  capturaCoordenadas(){
    //captura as coordenadas do usuário e as insere em um objeto track
    if(this.capturar==false){
      this.capturar=true;
      this.subscription = this.observador.subscribe(position => {
          console.log('captura ativada');
          this.coordenada.latitude=position.coords.latitude;
          this.coordenada.longitude=position.coords.longitude;
          this.latlong.push(this.coordenada);
          console.log(this.track);
      });
    }else if(this.capturar==true){
      this.capturar=false;
      this.subscription.unsubscribe();
      console.log('captura desativada');
      //Popar uma tela de avaliação de trajeto
      //this.track.trackRating = X
      //Jsonify e depois mandar o objeto trajeto para o sistema de recomendacao

    }
  }

}
