import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map,take } from 'rxjs/operators';
import { Panier } from '../model/panier';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private panier:Panier={
    
    commandeburger:[],
    commandemenu:[],
    commandefrite:[],
    commandetailleboisson:[],
    
  }
  
  itemsSubject = new BehaviorSubject<any>(this.panier);
  constructor(private http:HttpClient,private storageservice:StorageService) {
    let existingCartItems=this.storageservice.getProduit()
    this.itemsSubject.next(existingCartItems);
   }
   items$:Observable<any> = this.itemsSubject.asObservable();



  
   
  addToCart(product:any){
    this.items$.pipe(
      take(1),
      map((products) => {
        console.log(products);
        
        // products.push(product);
        this.storageservice.set('produit',product)
        // localStorage.setItem('produit', JSON.stringify(products));
      }),
    ).subscribe();
  }
//    ExistProduit(tableau:any,idprod:number){
//     return tableau.find((pro:any)=> {
//       // console.log(pro.id);
//       return pro.id === idprod
//    });

// }

}
