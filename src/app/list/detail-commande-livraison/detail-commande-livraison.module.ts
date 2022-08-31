import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCommandeLivraisonPageRoutingModule } from './detail-commande-livraison-routing.module';
import { QRCodeModule } from 'angularx-qrcode';

import { DetailCommandeLivraisonPage } from './detail-commande-livraison.page';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QRCodeModule,
    IonicModule,
    DetailCommandeLivraisonPageRoutingModule
  ],
  providers :[QRScanner],
  declarations: [DetailCommandeLivraisonPage]
})
export class DetailCommandeLivraisonPageModule {}
