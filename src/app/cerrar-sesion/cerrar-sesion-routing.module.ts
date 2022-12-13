import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CerrarSesionPage } from './cerrar-sesion.page';

const routes: Routes = [
  {
    path: '',
    component: CerrarSesionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CerrarSesionPageRoutingModule {}
