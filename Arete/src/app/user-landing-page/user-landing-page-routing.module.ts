import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLandingPagePage } from './user-landing-page.page';

const routes: Routes = [
  {
    path: '',
    component: UserLandingPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserLandingPagePageRoutingModule {}
