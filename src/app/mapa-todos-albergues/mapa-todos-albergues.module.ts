import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaTodosAlberguesPageRoutingModule } from './mapa-todos-albergues-routing.module';

import { MapaTodosAlberguesPage } from './mapa-todos-albergues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaTodosAlberguesPageRoutingModule
  ],
  declarations: [MapaTodosAlberguesPage]
})
export class MapaTodosAlberguesPageModule {}
