import { Component, OnInit, VERSION ,ViewChild } from '@angular/core';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Result } from '@zxing/library';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
@Component({
  selector: 'app-clientscanner',
  templateUrl: './clientscanner.page.html',
  styleUrls: ['./clientscanner.page.scss'],
})
export class ClientscannerPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  ngVersion = VERSION.full;
 
  @ViewChild('scanner')
  scanner: ZXingScannerComponent;

  
  hasDevices: boolean;
  hasPermission: boolean;
  qrResultString: string;
  qrResult: Result;
 
  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo;






  constructor(private qrScanner: QRScanner) { }

  ngOnInit():void {
    
    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.hasDevices = true;
      this.availableDevices = devices;
 
    });
    this.scanner.camerasNotFound.subscribe(() => this.hasDevices = false);
    this.scanner.scanComplete.subscribe((result: Result) => this.qrResult = result);
    this.scanner.permissionResponse.subscribe((perm: boolean) => this.hasPermission = perm);

  }


  displayCameras(cameras: MediaDeviceInfo[]) {
    console.debug('Devices: ', cameras);
    this.availableDevices = cameras;
  }
 
  handleQrCodeResult(resultString: string) {
    console.debug('Result: ', resultString);
    this.qrResultString = resultString;
  }
 
  onDeviceSelectChange(selectedValue: string) {
    console.debug('Selection changed: ', selectedValue);
    // this.currentDevice = this.scanner.getDeviceById(selectedValue);
  }
 
 
  
  stateToEmoji(state: boolean): string {
 
    const states = {
      // not checked
      undefined: '❔',
      // failed to check
      null: '⭕',
      // success
      true: '✔',
      // can't touch that
      false: '❌'
    };
 
    return states['' + state];
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
