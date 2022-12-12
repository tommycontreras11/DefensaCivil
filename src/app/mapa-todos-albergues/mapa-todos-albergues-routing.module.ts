import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaTodosAlberguesPage } from './mapa-todos-albergues.page';

const routes: Routes = [
  {
    path: '',
    component: MapaTodosAlberguesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaTodosAlberguesPageRoutingModule {}
