import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map} from "rxjs/operators";
import { Observable } from 'rxjs';
import { Catalogue } from '../model/Catalogue';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private http:HttpClient) { }

  private url:string = "http://localhost:8000/api/catalogue"
  private urld:string = "http://localhost:8000/api/details"


  all():Observable<Catalogue> {
    return this.http.get<Catalogue>(this.url).pipe(
      map(data=>{
        let datas=data['hydra:member']
       
        let catalogue:Catalogue={
           menu:[],
           burger:[],
           produits:[]
          }
        if(datas!=undefined){
          catalogue={
            menu:datas[0].menu,
            burger:datas[1].burger,
            produits:[...datas[0].menu,...datas[1].burger]
           }
        }
        // data.produits=[...data.burger,...data.menu]
        return catalogue;
      })
    )
  }
  getProduit=(id: number)=>{
    return this.http.get<any>(`${this.urld}/${id}`)
    // .pipe(
    //   map(
    //     data=>{
    //       return data
    //     }
    //   )
    // )
  }
}
