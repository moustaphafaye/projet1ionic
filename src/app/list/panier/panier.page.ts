import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  constructor(private panierservicd:PanierService) { }
  valeur$:Observable<any>= this.panierservicd.items$
  
  ngOnInit() {
    console.log(this.valeur$);
  }

}
