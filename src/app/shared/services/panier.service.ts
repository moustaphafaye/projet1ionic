import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Panier } from '../model/panier';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor() { }
  private panier:Panier={

    commandeburger:[],
    commandemenu:[],
    commandefrite:[],
    commandetailleboisson:[],
      
  }

  itemsSubject = new BehaviorSubject<Panier>(this.panier);



  // async gettoken() {
  //   let tokens= await this.storage.get('token')
  //   console.log(tokens);
  //   return tokens
    
  // }

}
