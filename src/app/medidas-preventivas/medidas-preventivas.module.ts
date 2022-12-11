import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedidasPreventivasPageRoutingModule } from './medidas-preventivas-routing.module';

import { MedidasPreventivasPage } from './medidas-preventivas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedidasPreventivasPageRoutingModule
  ],
  declarations: [MedidasPreventivasPage]
})
export class MedidasPreventivasPageModule {}
