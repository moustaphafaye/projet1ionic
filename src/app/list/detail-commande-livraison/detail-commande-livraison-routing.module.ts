import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailCommandeLivraisonPage } from './detail-commande-livraison.page';

const routes: Routes = [
  {
    path: '',
    component: DetailCommandeLivraisonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailCommandeLivraisonPageRoutingModule {}
