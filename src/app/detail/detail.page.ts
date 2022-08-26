import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailsProduit } from '../shared/model/DetailsProduit';
import { CatalogueService } from '../shared/services/catalogue.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  produit$:Observable<any>|undefined=undefined
  produits:DetailsProduit
  constructor( private catalogue:CatalogueService,private route:ActivatedRoute) { }

  ngOnInit() {
    let id =this.route.snapshot.params['id'];
    console.log(id);
    
    //console.log(this.mba.getProduit(1))
    this.catalogue.getProduit(id).subscribe((data)=>{
      this.produits=data
      // console.log(this.produits);
    })
    
    
  }

}
