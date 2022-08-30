import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientscannerPageRoutingModule } from './clientscanner-routing.module';
import { QRCodeModule } from 'angularx-qrcode';
import { ClientscannerPage } from './clientscanner.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QRCodeModule,
    
    IonicModule,
    ClientscannerPageRoutingModule
  ],
  declarations: [ClientscannerPage]
})
export class ClientscannerPageModule {}
