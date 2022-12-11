import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaSituacionesPage } from './mapa-situaciones.page';

const routes: Routes = [
  {
    path: '',
    component: MapaSituacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaSituacionesPageRoutingModule {}
