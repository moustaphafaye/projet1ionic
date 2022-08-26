import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AuthentificationService } from '../shared/services/authentification.service';
import { StorageService } from '../shared/services/storage.service';
import { ToastService } from '../shared/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userFormGroup : any ;
  constructor(private auth:AuthentificationService,
              private router: Router,
              private storag:StorageService,
              private toastservice:ToastService,
              public storage: Storage) { }


  ngOnInit() {
    this.userFormGroup=new FormGroup({
      login:new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[ Validators.required,Validators.minLength(3)])
    })
  }
    handerlogin(){
    // console.log(this.userFormGroup.value);
    
    this.auth.connexion(this.userFormGroup.value).subscribe((data)=>{
      console.log(data);
      this.auth.valuetoken(data.token,data.id)

      // const letoken=this.auth.getDecodedAccessToken(data.token)
      //     // console.log(letoken);
      //     const a=data.id
          
      //     if(letoken.roles[0]==='ROLE_CLIENT'){
      //         console.log(a);
      //         this.router.navigate(['clients/'+a+'/commandes'])
      //         this.toastservice.presentToast('login ou mot de pass incorrect !!!')

      //       }else if(( letoken.roles[0]==='')){
      //         this.toastservice.presentToast('login ou mot de pass incorrect !!!')
      //           console.log('pas de connexion');
                
      //       }else{

      //       }
      //       console.log(data.token);
            
      //       this.storag.set('token',data.token)
      
    })
  }
 async gettoken() {
    let tokens= await this.storage.get('token')
    console.log(tokens);
    return tokens
    
  }

}
