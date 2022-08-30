import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { headersToString } from 'selenium-webdriver/http';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastService } from './toast.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
}) 
export class AuthentificationService {
  private urllogin="http://localhost:8000/api/login"
  private _storage: Storage | null = null;
  IsConnecter:BehaviorSubject<boolean> =  new BehaviorSubject(false);
  Role:BehaviorSubject<any> =  new BehaviorSubject('');
  id:BehaviorSubject<number> =  new BehaviorSubject(0);

  constructor(  private storag:StorageService,private toastservice:ToastService,private http:HttpClient, private router: Router) { }

  connexion(koni:any){
    return this.http.post<any>(this.urllogin,koni)
  } 

  valuetoken(token:string,a:any):void{
      let get_token=this.getDecodedAccessToken(token)
      this.IsConnecter.next(true)
      
      if(get_token.roles[0]==='ROLE_CLIENT'){
        // console.log(a);
        this.Role.next('ROLE_CLIENT')
        this.id.next(a)
        this.router.navigate(['clients/'+a+'/commandes'])
        this.toastservice.presentToast('login ou mot de pass incorrect !!!')
        
      }else  if(get_token.roles[0]==='ROLE_LIVREUR'){
        this.Role.next('ROLE_LIVREUR')
        this.router.navigate(['/livraison'])
        this.toastservice.presentToast('login ou mot de pass incorrect !!!')
          // console.log('pas de connexion');
          
      }else{

      }
      this.storag.set('token',token)
  }
   

  // items$ = this.itemsSubject.asObservable();

  
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);

    } catch(Error) {
      
      return null;
    }
  }
  post(serviceName:string,data:any){
    const headers = new HttpHeaders()
    const options = {header: headers,withCredintials:false}
    const urllogin="http://localhost:8000/api/login"+serviceName
    // return this.http.post(urllogin,JSON.stringify(data),options)
  }
}
