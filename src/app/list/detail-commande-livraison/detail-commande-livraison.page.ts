import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsCommande } from 'src/app/shared/model/detailsCommande';
import { CommandeService } from 'src/app/shared/services/commande.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-detail-commande-livraison',
  templateUrl: './detail-commande-livraison.page.html',
  styleUrls: ['./detail-commande-livraison.page.scss'],
})
export class DetailCommandeLivraisonPage implements OnInit {
  detailcommande:DetailsCommande
  Total:any
  // public textToCode:string
  // public showCamera = false;
  // public myAngularxQrCode: string = null;
  // public textScanned: string = '';
   
  constructor(private qrScanner: QRScanner,private storageservice:StorageService, private servicecommande:CommandeService,private route:ActivatedRoute,) {
    
   }

 async ngOnInit() {
  const id =this.route.snapshot.params['id'];
  console.log(id);
  // console.log( this.scancode());
  
  let  token= await this.storageservice.gettoken()
      this.servicecommande.getCommande(id,token).subscribe((data)=>{
        this.detailcommande=data
         console.log(this.detailcommande);
        this.Total=(this.detailcommande.montant)+(this.detailcommande.zone.prix)
      })

  }
  // createQRCode() {
  //   this.myAngularxQrCode = this.textToCode;
  //   this.textToCode = "";
  // }
  scancode() {
    // this.showCamera = true;
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
       if (status.authorized) {
         // camera permission was granted
  
         // start scanning
         let scanSub = this.qrScanner.scan().subscribe((text: any) => {
           console.log('Scanned something', text);
          //  this.textScanned = text.result;
           this.qrScanner.hide(); // hide camera preview
           scanSub.unsubscribe(); // stop scanning
          //  this.showCamera = false;
         });
  
       } else if (status.denied) {
         // camera permission was permanently denied
         // you must use QRScanner.openSettings() method to guide the user to the settings page
         // then they can grant the permission from there
       } else {
         // permission was denied, but not permanently. You can ask for permission again at a later time.
       }
    })
    .catch((e: any) => console.log('Error is', e));
  }
  closeCamera() {
    // this.showCamera = false;
    this.qrScanner.hide(); // hide camera preview
    this.qrScanner.destroy();
  }

}
