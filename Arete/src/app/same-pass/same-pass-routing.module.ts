import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamePassPage } from './same-pass.page';

const routes: Routes = [
  {
    path: '',
    component: SamePassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamePassPageRoutingModule {}
