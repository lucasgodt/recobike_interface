import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrackPage } from './track';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TrackPage,
  ],
  imports: [
    IonicPageModule.forChild(TrackPage),
    ComponentsModule,
  ],
  exports: [
    TrackPage,
  ]
})
export class ProfilePageModule {}
