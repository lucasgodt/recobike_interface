import { Component, OnDestroy, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.interface';
import { Track } from '../../models/tracks/tracks.interface';
import { DataService } from '../../providers/data/data.service';
import { AuthService } from '../../providers/auth/auth.service';
/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent implements OnInit, OnDestroy {

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;

  @Output() saveProfileResult: EventEmitter<Boolean>;

  @Input() profile: Profile;
  track1: Track;
  track2: Track;

  constructor(private auth: AuthService, private data: DataService) {
    this.saveProfileResult = new EventEmitter<Boolean>();
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user
    })
  }

  async saveProfile(){
    if(this.authenticatedUser){
    const result = await this.data.saveProfile(this.authenticatedUser, this.profile);
    this.saveProfileResult.emit(result);
    }
  }

  createService(){

  }

  ngOnInit(): void{
    if(!this.profile){
      this.profile = {} as Profile;
    }
    //hardcoded tracks para teste
    if(!this.profile.tracks){
    this.track1 = {} as Track;
    this.track2 = {} as Track;
    this.track1.trackId = 1;
    this.track1.trackDate = new Date(2017, 7, 20);
    this.track2.trackId = 2;
    this.track2.trackDate = new Date(2017, 9, 25);
    this.profile.tracks = {} as Track[];
    this.profile.tracks[0] = this.track1;
    this.profile.tracks[1] = this.track2;

    //this.profile.tracks[1].trackId = 1;
    //this.profile.tracks[1].trackDate = new Date(2017, 9, 21);
  }
}

  ngOnDestroy(): void{
    this.authenticatedUser$.unsubscribe();
  }

}
