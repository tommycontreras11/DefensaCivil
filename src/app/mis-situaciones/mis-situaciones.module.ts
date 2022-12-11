import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisSituacionesPageRoutingModule } from './mis-situaciones-routing.module';

import { MisSituacionesPage } from './mis-situaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisSituacionesPageRoutingModule
  ],
  declarations: [MisSituacionesPage]
})
export class MisSituacionesPageModule {}
