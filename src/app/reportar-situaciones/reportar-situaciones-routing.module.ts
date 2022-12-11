import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportarSituacionesPage } from './reportar-situaciones.page';

const routes: Routes = [
  {
    path: '',
    component: ReportarSituacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportarSituacionesPageRoutingModule {}
