import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrgRegisterPageRoutingModule } from './org-register-routing.module';

import { OrgRegisterPage } from './org-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrgRegisterPageRoutingModule
  ],
  declarations: [OrgRegisterPage]
})
export class OrgRegisterPageModule {}
