import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { region } from '../model/region.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {


  save(region:region):region{  //region de type region
    //cette fontion permet de créer une région

  const req = this.client.post<any>(`${this.CREATE_REGION}`,region); //l'envoie de la requête
   req.subscribe(data =>{ console.log(data); return data },  
            error=>{ console.log(error); return null});
            
    return region;
             
                  
  }


  getlist():Observable<region[]>{  //region de type region      
      return this.client.get<any>(`${this.CREATE_REGION}`);            
    }

    deleteRegion(id:number):Observable<region[]>{  //region de type region      
      return this.client.delete<any>(`${this.CREATE_REGION}/${id}`);            
    }

    updateRegion(id:number):Observable<region[]>{  //region de type region      
      return this.client.get<any>(`${this.CREATE_REGION}/${id}`);            
    }
  
  CREATE_REGION = "http://localhost:8000/api/regionModel";
  constructor(public client:HttpClient) { }
}
