import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarClavePageRoutingModule } from './cambiar-clave-routing.module';

import { CambiarClavePage } from './cambiar-clave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarClavePageRoutingModule
  ],
  declarations: [CambiarClavePage]
})
export class CambiarClavePageModule {}
