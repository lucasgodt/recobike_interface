import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../providers/data/data.service';
import { AuthService } from '../../providers/auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { User } from "firebase/app";
import { Profile } from "../../models/profile/profile.interface";
import { Track } from "../../models/tracks/tracks.interface";
import { LoadingController, Loading } from "ionic-angular";
import { NavParams, NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-track-view',
  templateUrl: 'track-view.component.html'
})
export class TrackViewComponent implements OnInit {

  public userProfile: Profile;
  track: Observable<any>;
  public authUser: boolean = false;
  private loader: Loading;

  //Iremos emitir a rota recomendada para a page track, esta deverá então pega-la
  @Output() recommendedTrack: EventEmitter<Track>;

  @Output() authenticatedUser: EventEmitter<boolean>;

  @Output() existingProfile: EventEmitter<Profile>;

  constructor(private navCtrl: NavController, private loading: LoadingController, private data: DataService, private auth: AuthService,private nav: NavParams,private http: Http) {

    this.existingProfile = new EventEmitter<Profile>();
    this.authenticatedUser = new EventEmitter<boolean>();
    this.recommendedTrack = new EventEmitter<Track>();

    this.loader = this.loading.create({
      content:"Calculando recomendação..."
    });
  }

  ngOnInit(): void{
    this.loader.present();
    this.userProfile = this.nav.get('profile');
    //Mudar para pegar navParams, o profile a ser mostrado será escolhido pela pagina anterior
    if(!this.userProfile){
    this.authUser = true;
    this.data.getAuthenticatedUserProfile().subscribe(profile => {
      this.userProfile = profile;
      this.existingProfile.emit(this.userProfile);
      this.authenticatedUser.emit(this.authUser);

    })
    }

    this.track = this.http.get('https://recobike.herokuapp.com/recommend/2');
    this.track.map(res => res.json()).subscribe(data => { console.log('Passeio recomendado: ', data); })

    this.loader.dismiss();
  }

  showTrack(track: Track){

  }



  openChat(profile: Profile){
    this.navCtrl.push('MessagePage',{ profile });
  }

}
