import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Catalogue } from '../shared/model/Catalogue';
import { Produit } from '../shared/model/Produit';
import { CatalogueService } from '../shared/services/catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {
  catalogues : Catalogue|undefined=undefined; 
  produits: Produit[]|undefined=undefined
  constructor(private catalogue:CatalogueService,public router: Router) { }

  ngOnInit() {
    this.catalogue.all().subscribe((data)=>{
      this.catalogues =data
      this.produits=this.catalogues?.produits 
      console.log(this.produits);
      
   });
   
  }
  
  dou(){
    alert('ok')
  }

  infor(kony:string){
   
    switch (kony) {
      case "burger":

        this.catalogue.all().subscribe((data)=>{
            this.catalogues=data
            this.produits=this.catalogues.burger
            
        })
          
        break;
        case "menu":
          this.catalogue.all().subscribe((data)=>{
            this.catalogues=data
            this.produits=this.catalogues.menu
            
        })
        break;
        default:
      }
  }
   
  slideOpts = {
    initialSlide: 2,
    speed: 400,
    loop: true, 
    autoplay: {
      delay: 4000
}
  };
}
