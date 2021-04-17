import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrgRegisterPage } from './org-register.page';

const routes: Routes = [
  {
    path: '',
    component: OrgRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrgRegisterPageRoutingModule {}
