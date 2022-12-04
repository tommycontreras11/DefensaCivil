import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlberguesPageRoutingModule } from './albergues-routing.module';

import { AlberguesPage } from './albergues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlberguesPageRoutingModule
  ],
  declarations: [AlberguesPage]
})
export class AlberguesPageModule {}
