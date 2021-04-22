import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserApprovalsPage } from './user-approvals.page';

const routes: Routes = [
  {
    path: '',
    component: UserApprovalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserApprovalsPageRoutingModule {}
