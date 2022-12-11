import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisSituacionesPage } from './mis-situaciones.page';

const routes: Routes = [
  {
    path: '',
    component: MisSituacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisSituacionesPageRoutingModule {}
