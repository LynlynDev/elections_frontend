import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { region } from '../model/region.model';

@Injectable({
  providedIn: 'root'
})
export class RegionService {


  save(region:region):obser{  //region de type region
    

  const req = this.client.post<any>(`${this.CREATE_REGION}`,region); //l'envoie de la requête
   req.subscribe(data =>{ console.log(data); return data },  
            error=>{ console.log(error); return null});
            
    return null;
             
                  
  }
  
  CREATE_REGION = "http://localhost:8000/api/regionModel";
  constructor(public client:HttpClient) { }
}
