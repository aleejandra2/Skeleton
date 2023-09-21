import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegementsPage } from './segements.page';

const routes: Routes = [
  {
    path: '',
    component: SegementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegementsPageRoutingModule {}
