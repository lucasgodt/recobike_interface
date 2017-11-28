import { Component, Output, EventEmitter, Input, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../providers/data/data.service';
import { Profile } from '../../models/profile/profile.interface';
import { AuthService } from '../../providers/auth/auth.service';
import { User } from 'firebase/app';
import { Subscription } from 'rxjs/Subscription';
import { Need } from '../../models/need/need.interface';
import { Track } from '../../models/tracks/tracks.interface';

/**
 * Generated class for the ProfileSearchComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-profile-search',
  templateUrl: 'profile-search.component.html'
})
export class ProfileSearchComponent implements OnInit, OnDestroy {

  query: string;

  trackList: Track[]

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;

  userProfile: Profile;

  @Output() selectedTrack: EventEmitter<Track>;

  constructor(private data: DataService, private auth: AuthService) {
    this.selectedTrack = new EventEmitter<Track>();
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user
    })

  }

  async saveProfile(profile: Profile){
    if(this.authenticatedUser){
    const result = await this.data.saveProfile(this.authenticatedUser, profile);
    }
  }

  selectTrack(track: Track){
    this.selectedTrack.emit(track);
  }

ngOnInit(): void{
  if(!this.userProfile){
    this.userProfile = {} as Profile;
    this.data.getAuthenticatedUserProfile().subscribe(profile => {
      //Instancia o perfil do usuário
      this.userProfile = profile;
      this.trackList = profile.tracks;
      
    });
  }
}

ngOnDestroy(): void{
  this.authenticatedUser$.unsubscribe();
}

}
