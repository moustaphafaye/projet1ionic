import { Pipe, PipeTransform } from '@angular/core';
import { Ilivrer } from '../model/commande';

@Pipe({
  name: 'pipeservice'
})
export class PipeservicePipe implements PipeTransform {

  transform(commande: Ilivrer[], filtre:string) {
        
    return null;
  }

}
