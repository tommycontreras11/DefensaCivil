import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaAlberguesPageRoutingModule } from './mapa-albergues-routing.module';

import { MapaAlberguesPage } from './mapa-albergues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaAlberguesPageRoutingModule
  ],
  declarations: [MapaAlberguesPage]
})
export class MapaAlberguesPageModule {}
