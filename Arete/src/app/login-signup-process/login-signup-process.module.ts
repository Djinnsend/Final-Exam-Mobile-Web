import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginSignupProcessPageRoutingModule } from './login-signup-process-routing.module';

import { LoginSignupProcessPage } from './login-signup-process.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginSignupProcessPageRoutingModule
  ],
  declarations: [LoginSignupProcessPage]
})
export class LoginSignupProcessPageModule {}
