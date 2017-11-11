import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth.service';
import { Profile } from '../../models/profile//profile.interface';

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

  constructor(private auth: AuthService, private navCtrl: NavController, private navParams: NavParams) {

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
  }

}
