import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
// import { Storage } = Plugins
@Injectable({
  providedIn: 'root'
})
export class StoragesService {

  constructor() { }
  async store(storagekey:string,value:any){
    // await Storage.set
    ({
      key:storagekey,
      value:value
    })
  }
}
