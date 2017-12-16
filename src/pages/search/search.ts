import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth.service';
import { DataService } from '../../providers/data/data.service';
import { Profile } from '../../models/profile//profile.interface';
import { Track } from "../../models/tracks/tracks.interface";
import { Coordenada } from "../../models/coordenada/coordenada.interface";
import { Geolocation,Geoposition } from '@ionic-native/geolocation';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';
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

  userProfile: Profile;
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
    $trackId: 0,
    trackRating: 0,
    userId: null,
    androidId: 0
  };

  constructor(public http: Http,private data: DataService, private auth: AuthService, private navCtrl: NavController, private navParams: NavParams, private geolocation: Geolocation,private toast: ToastController) {
    this.capturar = false;
    this.observador = this.geolocation.watchPosition(/*{enableHighAccuracy : true}*/)
                            .filter((p) => p.coords !== undefined) //Filtra erros
    //capturar o id do usuário e o utilizar
  }

  postRequestTrack() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
    //http://127.0.0.1:5002/novatrack
    //https://recobike.herokuapp.com/novatrack
    this.http.post("https://recobike.herokuapp.com/novatrack", this.track, options)
      .subscribe(data => {
        console.log('ID DO USUARIO',this.track.userId)
        console.log('ID DA TRACK',this.track.$trackId)
        console.log('ID DO ANDROID',this.track.androidId)
        console.log(data);
        this.clearTrack();
       }, error => {
        console.log(error);// Error getting the data
      });
  }

  openProfile(profile: Profile){
    this.navCtrl.push('ProfilePage',{ profile });
  }

  ngOnInit(): void{
    this.auth.getAuthenticatedUser().subscribe(auth => {
        !auth? this.authenticate = false: this.authenticate = true;
    });

    if(!this.userProfile){
        this.data.getAuthenticatedUserProfile().subscribe(profile => {
        this.userProfile = profile;
      })
    }
  }

  navigateToPage(pageName: string):void{
    this.navCtrl.push(pageName);
    console.log(this.track)
  }

  capturaCoordenadas(){
    //captura as coordenadas do usuário e as insere em um objeto track
    //**PRIMEIRO DE TUDO, ANDROIDID DEVE SER COISA DO PROFILE E DEVE SER CRIADO NO REGISTER
    if(this.capturar==false){
      this.capturar=true;
      this.toast.create({
        message:"Capturando Rota...",
        duration: 3000
      }).present();
      this.subscription = this.observador.subscribe(position => {
          console.log('captura ativada');
          //**COLOCAR UM IF PARA QUE SE A COORDENADA FOR MUITO PROXIMA NAO GRAVAR
          this.coordenada.latitude=position.coords.latitude;
          this.coordenada.longitude=position.coords.longitude;
          this.latlong.push(this.coordenada);
          console.log(this.track);
      });
      //**popar uma tela que esta gravando trajeto cujo unico botão cancela a gravação


    }else if(this.capturar==true){
      this.capturar=false;
      this.toast.create({
        message:"Rota Capturada",
        duration: 3000
      }).present();
      this.subscription.unsubscribe();
      console.log('captura desativada');
      //**Popar uma tela de avaliação de trajeto
      this.track.trackRating = 5;
      this.track.userId = this.userProfile.$key;
      let c = Math.random()*100000;
      let d = Math.round(c);
      this.track.$trackId = d;
      this.track.androidId = this.userProfile.androidId;
      //Jsonify e depois manda o objeto trajeto para o sistema de recomendacao
      this.postRequestTrack();
    }
  }

  clearTrack(){
    this.latlong.length = 0;
    this.track.coordenadas = this.latlong;
  }
//**DEPOIS REALIZAR UPDATE NA LISTA DE TRACKS DO USUARIO
}
