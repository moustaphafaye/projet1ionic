import { Component, OnInit,VERSION ,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailsCommande } from 'src/app/shared/model/detailsCommande';
import { CommandeService } from 'src/app/shared/services/commande.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { OverlayEventDetail } from '@ionic/core/components';
import { IonModal } from '@ionic/angular';
import { Result } from '@zxing/library';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Qrcode } from 'src/app/shared/model/qrcode';
@Component({
  selector: 'app-detailcommande',
  templateUrl: './detailcommande.page.html',
  styleUrls: ['./detailcommande.page.scss'],
})
export class DetailcommandePage implements OnInit {
  constructor(private storageservice:StorageService, private servicecommande:CommandeService,private route:ActivatedRoute,public router: Router) { }
  produit$:DetailsCommande
  nCommande:any
  idCommande:number
  idClient:number
  idSomme:number
  qrcode:any

  @ViewChild(IonModal) modal: IonModal;
  ngVersion = VERSION.full;
 
  @ViewChild('scanner')
  scanner: ZXingScannerComponent;
  
  
  hasDevices: boolean;
  hasPermission: boolean;
  qrResultString: object;
  qrResult: Result;
  
 
  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo;



 async ngOnInit() {
    const id =this.route.snapshot.params['id'];
    let  token= await this.storageservice.gettoken()
    console.log(id);
    this.servicecommande.getCommande(id,token).subscribe((data)=>{
      this.produit$=data
      this.idClient=this.produit$.client.id
      this.idCommande= this.produit$.id
      this.idSomme=(this.idCommande+this.idClient)
      console.log(this.idSomme);
      
    })

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
 
async  handleQrCodeResult(resultString: any) {
    
    this.qrResultString = resultString;
    //  this.qrcode.idclient=this.qrResultString.id_client 
    this.qrcode=JSON.parse(resultString)
    // alert( this.qrcode.id_client);
    console.log(this.qrcode);
     

    if((this.qrcode.id_client==this.idClient)&&(this.qrcode.id_commande==this.idCommande)){
     let  token= await this.storageservice.gettoken()
    this.servicecommande.modifierCommande(this.qrcode.id_commande,token)
        // alert("c'est bien")
    }else{
      
      alert("ok")
    }


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

  

}
