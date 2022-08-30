import { Component, OnInit } from '@angular/core';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import {  ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

import { OverlayEventDetail } from '@ionic/core/components';
@Component({
  selector: 'app-clientscanner',
  templateUrl: './clientscanner.page.html',
  styleUrls: ['./clientscanner.page.scss'],
})
export class ClientscannerPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  constructor(private qrScanner: QRScanner) { }

  ngOnInit() {
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss('confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      // this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
