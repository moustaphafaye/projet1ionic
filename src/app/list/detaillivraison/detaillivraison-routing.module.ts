import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetaillivraisonPage } from './detaillivraison.page';

const routes: Routes = [
  {
    path: '',
    component: DetaillivraisonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetaillivraisonPageRoutingModule {}
