import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { region } from 'src/app/model/region.model';
import { RegionService } from 'src/app/services/region.service';

declare var window:any;
@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})



export class RegionComponent implements OnInit{
  public formR!:FormGroup;
  public formU!:FormGroup;

  error?:string
  region: region = new region();
  formModal!:any
  success?:string
  regions?:any //c'est cette variable qui sera interpoler dans la bd pour afficher la liste des régions
  
  constructor(public formBulder: FormBuilder, public service:RegionService){

  }
  ngOnInit(): void {
    this.formR = this.formBulder.group({    //formBulder est le nom de la variable et peut -être appéle n'importe comment
        label: ["", Validators.required],
    });
    this.formU = this.formBulder.group({    //formBulder est le nom de la variable et peut -être appéle n'importe comment
      label: ["", Validators.required],
  });
    this.formModal=new window.bootstrap.Modal(
      document.getElementById("lyn")
    );
  }

  showModal(region:any){
    this.region= region;
    this.formModal.show();
    this.formU.controls['label'].setValue(region.label);
  }

  updateModal(){
    
  }
  onRegisterRegion(){
    const r = new region
    r.label = this.formR.value.label
    const res = this.service.save(r);
    console.log(res);

    if(res!=null){
      this.success = "Enregistrement réussie";
      this.listeRegion();
    }else{
      this.error ="Echec d'enregistrement";
    }
  }


  listeRegion(){
    this.service.getlist().subscribe(
      (data)=>{
        this.regions=data;
        console.log(this.regions);
      },
      (error)=>{
        error="impossible d'avoir la liste";
      })
  }

  deleteRegion(id:number){
    this.service.deleteRegion(id).subscribe(
      (data)=>{
        this.success="Opération réussie";
        this.listeRegion();
      },
      (error)=>{
        this.error="Echec de la suppression";
      }
    )
  }

  updateRegion(id:number){
    this.service.updateRegion(id).subscribe(
      (data)=>{
        this.success="Opération réussie";
        this.listeRegion();
      },
      (error)=>{
        this.error="Echec de la modification";
      }
    )

    
  }


}
