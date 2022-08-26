import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailsCommande } from 'src/app/shared/model/detailsCommande';
import { CommandeService } from 'src/app/shared/services/commande.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-detailcommande',
  templateUrl: './detailcommande.page.html',
  styleUrls: ['./detailcommande.page.scss'],
})
export class DetailcommandePage implements OnInit {
  constructor(private storageservice:StorageService, private servicecommande:CommandeService,private route:ActivatedRoute,public router: Router) { }
  produit$:DetailsCommande
  nCommande:any
 async ngOnInit() {
    const id =this.route.snapshot.params['id'];
    let  token= await this.storageservice.gettoken()
    console.log(id);
    this.servicecommande.getCommande(id,token).subscribe((data)=>{
      this.produit$=data
      this.produit$.commandeburger=undefined
      console.log(this.produit$);
      
    })
  }
  

}
