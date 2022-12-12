import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaAlberguesPage } from './mapa-albergues.page';

const routes: Routes = [
  {
    path: '',
    component: MapaAlberguesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaAlberguesPageRoutingModule {}
