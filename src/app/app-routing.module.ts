import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'catalogue', loadChildren: () => import('./catalogue/catalogue.module').then( m => m.CataloguePageModule)},
  { path: '',redirectTo: 'catalogue',pathMatch: 'full'},
  { path: 'detail/:id', loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule) },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'clients/:id/commandes',
    loadChildren: () => import('./list/listcommande/listcommande.module').then( m => m.ListcommandePageModule)
  },
  {
    path: 'clients/:id/commandes/detailcommande/:id',
    loadChildren: () => import('./list/detailcommande/detailcommande.module').then( m => m.DetailcommandePageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
