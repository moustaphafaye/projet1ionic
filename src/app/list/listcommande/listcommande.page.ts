import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Ilivrer } from 'src/app/shared/model/commande';
import { CommandeService } from 'src/app/shared/services/commande.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-listcommande',
  templateUrl: './listcommande.page.html',
  styleUrls: ['./listcommande.page.scss'],
})
export class ListcommandePage implements OnInit {
  listcommande:Ilivrer[]=[]
  constructor(private route:ActivatedRoute, private commandeservice:CommandeService,private storageservice:StorageService,private loadingCtrl: LoadingController) { }

 async ngOnInit() {
  const id =this.route.snapshot.params['id'];
      let  token= await this.storageservice.gettoken()
    this.commandeservice.commandeclient(id,token).subscribe((data)=>{
      data.forEach((element:any)=>{
        if(element.etat==='En cours'){
         this.listcommande.push(element)
         console.log( this.listcommande);
        }
      })
    })
  }
async  tousMesCommande(){
    const id =this.route.snapshot.params['id'];
      let  token= await this.storageservice.gettoken()
    this.commandeservice.commandeclient(id,token).subscribe((data)=>{
      this.listcommande=data
      
    })
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Dismissing after 3 seconds...',
      duration: 3000,
    });

    loading.present();
  }
}


