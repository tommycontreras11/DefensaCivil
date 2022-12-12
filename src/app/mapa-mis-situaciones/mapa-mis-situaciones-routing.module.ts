import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaMisSituacionesPage } from './mapa-mis-situaciones.page';

const routes: Routes = [
  {
    path: '',
    component: MapaMisSituacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaMisSituacionesPageRoutingModule {}
