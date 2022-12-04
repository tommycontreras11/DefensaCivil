import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlberguesPage } from './albergues.page';

const routes: Routes = [
  {
    path: '',
    component: AlberguesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlberguesPageRoutingModule {}
