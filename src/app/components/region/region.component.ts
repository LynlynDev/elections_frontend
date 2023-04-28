import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { region } from 'src/app/model/region.model';
import { RegionService } from 'src/app/services/region.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})



export class RegionComponent implements OnInit{
  public formR!:FormGroup;

  error?:string
  success?:string
  
  constructor(public formBulder: FormBuilder, public service:RegionService){

  }
  ngOnInit(): void {
    this.formR = this.formBulder.group({    //formBulder est le nom de la variable et peut -être appéle n'importe comment
        "label": ["", Validators.required],
    });
  }

  onRegisterRegion(){
    const r = new region
    r.label = this.formR.value.label
    const res = this.service.save(r)

    if(res!=null){
      this.success = "Enregistrement réussie";
    }else{
      this.error ="Echec d'enregistrement";
    }
  }


}
