import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCommandeLivraisonPageRoutingModule } from './detail-commande-livraison-routing.module';
import { QRCodeModule } from 'angularx-qrcode';

import { DetailCommandeLivraisonPage } from './detail-commande-livraison.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QRCodeModule,
    IonicModule,
    DetailCommandeLivraisonPageRoutingModule
  ],
  declarations: [DetailCommandeLivraisonPage]
})
export class DetailCommandeLivraisonPageModule {}
