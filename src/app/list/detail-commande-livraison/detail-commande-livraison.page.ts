import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsCommande } from 'src/app/shared/model/detailsCommande';
import { CommandeService } from 'src/app/shared/services/commande.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-detail-commande-livraison',
  templateUrl: './detail-commande-livraison.page.html',
  styleUrls: ['./detail-commande-livraison.page.scss'],
})
export class DetailCommandeLivraisonPage implements OnInit {
 
   detailcommande:DetailsCommande
   Total:any

  constructor(private storageservice:StorageService, private servicecommande:CommandeService,private route:ActivatedRoute,) { }

 async ngOnInit() {
  const id =this.route.snapshot.params['id'];
  console.log(id);
  
  let  token= await this.storageservice.gettoken()
      this.servicecommande.getCommande(id,token).subscribe((data)=>{
        this.detailcommande=data
         console.log(this.detailcommande);
        this.Total=(this.detailcommande.montant)+(this.detailcommande.zone.prix)
      })

  }

}
