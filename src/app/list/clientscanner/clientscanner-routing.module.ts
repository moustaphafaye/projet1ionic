import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientscannerPage } from './clientscanner.page';

const routes: Routes = [
  {
    path: '',
    component: ClientscannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientscannerPageRoutingModule {}
