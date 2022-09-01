import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailcommandePageRoutingModule } from './detailcommande-routing.module';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { QRCodeModule } from 'angularx-qrcode';
import { DetailcommandePage } from './detailcommande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QRCodeModule,
    ZXingScannerModule,
    IonicModule,
    DetailcommandePageRoutingModule
  ],
  declarations: [DetailcommandePage],
  providers : []
})
export class DetailcommandePageModule {}
