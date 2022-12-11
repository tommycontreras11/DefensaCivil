import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiembrosPageRoutingModule } from './miembros-routing.module';

import { MiembrosPage } from './miembros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiembrosPageRoutingModule
  ],
  declarations: [MiembrosPage]
})
export class MiembrosPageModule {}
