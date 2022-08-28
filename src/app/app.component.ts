import { Component,  } from '@angular/core';
import { AuthentificationService } from './shared/services/authentification.service';
// import { Storage } from '@ionic/storage';
// import { AuthentificationService } from './shared/services/authentification.service';
// import { StorageService } from './shared/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  {
  connexion:boolean=false
  role:string=''
  constructor(private auth:AuthentificationService) {}
   ngOnInit(): void {

    this.auth.IsConnecter.asObservable().subscribe((data)=>{
      console.log(data);
      
      this.connexion=data
    })
    this.auth.Role.asObservable().subscribe((datas)=>{
      // console.log(data);
      this.role=datas
      
    })
}

  deconnecter(){
    this.auth.IsConnecter.next(false)
  }
  
//  private tokens=''
   
   
}
