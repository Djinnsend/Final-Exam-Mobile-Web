import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserLandingPagePageRoutingModule } from './user-landing-page-routing.module';

import { UserLandingPagePage } from './user-landing-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserLandingPagePageRoutingModule
  ],
  declarations: [UserLandingPagePage]
})
export class UserLandingPagePageModule {}
