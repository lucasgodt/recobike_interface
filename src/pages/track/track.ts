import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth.service';
import { Profile } from '../../models/profile//profile.interface';

@IonicPage()
@Component({
  selector: 'page-track',
  templateUrl: 'track.html',
})
export class TrackPage implements OnInit {

  authenticate: Boolean;

  constructor(private auth: AuthService, private navCtrl: NavController, private navParams: NavParams) {

  }


  ngOnInit(): void{
    this.auth.getAuthenticatedUser().subscribe(auth => {
        !auth? this.authenticate = false: this.authenticate = true;
    });

    //carrega a recomendação depois que a api receber o resultado

  }


}
