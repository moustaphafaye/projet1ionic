import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListcommandePage } from './listcommande.page';

const routes: Routes = [
  {
    path: '', component: ListcommandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListcommandePageRoutingModule {}
