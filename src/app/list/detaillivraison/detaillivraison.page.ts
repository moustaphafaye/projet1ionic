import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import { Ilivrer } from 'src/app/shared/model/commande';
import { LivraisonService } from 'src/app/shared/services/livraison.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-detaillivraison',
  templateUrl: './detaillivraison.page.html',
  styleUrls: ['./detaillivraison.page.scss'],
})
export class DetaillivraisonPage implements OnInit {
  tableaux:Ilivrer[]=[]
  constructor(private storageservice:StorageService, private route:ActivatedRoute, private livraisonservice:LivraisonService) { }

 async ngOnInit() {
    const id =this.route.snapshot.params['id'];
    let  token= await this.storageservice.gettoken()
    this.livraisonservice.getCommandeLivraison(id,token).subscribe((data)=>{
      data.commandes.forEach((element:any)=>{
        if(element.etat==='En cours'){
          this.tableaux.push(element)
        }
      })
      console.log(this.tableaux);
      
    })

  }

}
