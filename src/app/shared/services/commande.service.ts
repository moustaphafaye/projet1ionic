import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient,private storageservice:StorageService) { }
  private urllistcommande:string="http://localhost:8000/api/commandes"
  private urlcommande1client:string = "http://localhost:8000/api/clients"
  private urlcommande:string="http://localhost:8000/api/commandes"


  
  listcommande(token:string):Observable<any>{
    let httpOptions={
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      })
    }
  //  let valeur=this.tokens
    return this.http.get<any>(this.urllistcommande,httpOptions).pipe(
      map(data=>{
        let datas=data["hydra:member"]
        // console.log(datas);
       return datas
     })
    )
  }
  getCommande=(id: number,token:string)=>{
    let httpOptions={
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      })
    }
    // let valeur=this.tokens
    return this.http.get<any>(this.urllistcommande+"/"+id,httpOptions)
  }
  commandeclient(id:number,token:string){
    let httpOptions={
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      })
    }
    return this.http.get<any>(this.urlcommande1client+"/"+id+"/commandes",httpOptions).pipe(
      map(data=>{
        let datas=data["hydra:member"]
        console.log(datas);
        
       return datas
     })
    )
  }


  modifierCommande(id:number,token:string){
    let httpOptions={
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      })
    }
      this.http.put<any>(this.urlcommande+"/"+id,{etat:'Valider'},httpOptions).subscribe();
  }
}
