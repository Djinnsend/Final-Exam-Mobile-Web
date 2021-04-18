import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginSignupProcessPage } from './login-signup-process.page';

const routes: Routes = [
  {
    path: '',
    component: LoginSignupProcessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginSignupProcessPageRoutingModule {}
