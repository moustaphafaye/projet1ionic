import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListcommandePageRoutingModule } from './listcommande-routing.module';

import { ListcommandePage } from './listcommande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListcommandePageRoutingModule
  ],
  declarations: [ListcommandePage]
})
export class ListcommandePageModule {}
