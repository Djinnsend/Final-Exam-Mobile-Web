import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrgLoginPageRoutingModule } from './org-login-routing.module';

import { OrgLoginPage } from './org-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrgLoginPageRoutingModule
  ],
  declarations: [OrgLoginPage]
})
export class OrgLoginPageModule {}
