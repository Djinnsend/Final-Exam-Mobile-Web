import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamePassPageRoutingModule } from './same-pass-routing.module';

import { SamePassPage } from './same-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamePassPageRoutingModule
  ],
  declarations: [SamePassPage]
})
export class SamePassPageModule {}
