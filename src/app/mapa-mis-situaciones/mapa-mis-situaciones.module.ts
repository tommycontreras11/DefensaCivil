import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaMisSituacionesPageRoutingModule } from './mapa-mis-situaciones-routing.module';

import { MapaMisSituacionesPage } from './mapa-mis-situaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaMisSituacionesPageRoutingModule
  ],
  declarations: [MapaMisSituacionesPage]
})
export class MapaMisSituacionesPageModule {}
