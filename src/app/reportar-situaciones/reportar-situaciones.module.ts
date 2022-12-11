import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportarSituacionesPageRoutingModule } from './reportar-situaciones-routing.module';

import { ReportarSituacionesPage } from './reportar-situaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportarSituacionesPageRoutingModule
  ],
  declarations: [ReportarSituacionesPage]
})
export class ReportarSituacionesPageModule {}
