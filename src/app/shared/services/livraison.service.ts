import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  private urllivraison:string="http://localhost:8000/api/livraisons"
  constructor(private http:HttpClient,private storageservice:StorageService) { }

  listLivraison(token:string):Observable<any>{ 
    const httpOptions={
    headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      })
    }
    return this.http.get<any>(this.urllivraison,httpOptions).pipe(
      map(data=>{
        let datas=data["hydra:member"]
       return datas
     })
    )
  }

  getCommandeLivraison(id:number,token:string):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      })
    }
   return this.http.get<any>(this.urllivraison+"/"+id+"commandes",httpOptions)
  }
}
