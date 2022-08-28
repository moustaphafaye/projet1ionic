import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetaillivraisonPageRoutingModule } from './detaillivraison-routing.module';

import { DetaillivraisonPage } from './detaillivraison.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetaillivraisonPageRoutingModule
  ],
  declarations: [DetaillivraisonPage]
})
export class DetaillivraisonPageModule {}
