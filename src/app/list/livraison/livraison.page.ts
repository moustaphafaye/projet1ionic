import { Component, OnInit } from '@angular/core';
import { Livraison } from 'src/app/shared/model/livraison';
import { LivraisonService } from 'src/app/shared/services/livraison.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.page.html',
  styleUrls: ['./livraison.page.scss'],
})
export class LivraisonPage implements OnInit {
tableaulivraison:Livraison[]=[]
  constructor(private storageservice:StorageService,private serivcelivraison:LivraisonService) { }

 async ngOnInit() {
      let  token= await this.storageservice.gettoken()
      this.serivcelivraison.listLivraison(token).subscribe((data)=>{
        data.forEach((element:any)=>{
          if(element.etat==='En cours'){
            // console.log(element.etat);
           this.tableaulivraison.push(element)
          }
        })
        
      })
 
  }

}
