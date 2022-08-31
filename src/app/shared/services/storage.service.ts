import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }
  async gettoken() {
    let tokens= await this.storage.get('token')
    console.log(tokens);
    return tokens
    
  }

  async getProduit() {
    let produit= await this.storage.get('produit')
    console.log(produit);
    if(produit){
      return produit
    }else{
      return []
    }
    
  }
}
