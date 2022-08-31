import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ClientscannerPageRoutingModule } from './clientscanner-routing.module';
import { QRCodeModule } from 'angularx-qrcode';
import { ClientscannerPage } from './clientscanner.page';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QRCodeModule,
    ZXingScannerModule,
    IonicModule,
    ClientscannerPageRoutingModule
  ],
  providers: [QRScanner],
  declarations: [ClientscannerPage]
})
export class ClientscannerPageModule {}
