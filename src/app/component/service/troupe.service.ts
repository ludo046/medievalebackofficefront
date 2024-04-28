import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { addtroupe} from '../../interface/troupe';


@Injectable({
  providedIn: 'root'
})
export class TroupeService {

  private ressourceUrl = environment.troupeUrl;
  public formData : any;

  constructor(
    private httpClient : HttpClient
  ) { }

  // createTroupe(addtroupe : addtroupe):Observable<{}>{
  //   const formData = new FormData();
  //   formData.append('name', addtroupe.name)
  //   formData.append('contact', addtroupe.contact)
  //   formData.append('phone', addtroupe.phone)
  //   formData.append('town', addtroupe.town)
  //   formData.append('contry', addtroupe.contry)
  //   formData.append('postalCode', addtroupe.postalCode)
  //   formData.append('description', addtroupe.description)
  //   formData.append('price', addtroupe.price)
  //   formData.append('image', addtroupe.picture);
  //   console.log(formData);
    
  //   return this.httpClient.post(`${this.ressourceUrl}add`,formData);
  // }
}
