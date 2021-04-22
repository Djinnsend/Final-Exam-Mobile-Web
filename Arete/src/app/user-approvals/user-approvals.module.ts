import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserApprovalsPageRoutingModule } from './user-approvals-routing.module';

import { UserApprovalsPage } from './user-approvals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserApprovalsPageRoutingModule
  ],
  declarations: [UserApprovalsPage]
})
export class UserApprovalsPageModule {}
