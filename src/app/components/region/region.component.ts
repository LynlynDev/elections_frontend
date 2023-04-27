import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})



export class RegionComponent implements OnInit{
  constructor(public formBulder: FormBuilder){}


  public formR!:FormGroup;
  ngOnInit(): void {
    this.formR = this.formBulder.group({    //formBulder est le nom de la variable et peut -être appéle n'importe comment
        "label": [" ", Validators.required],
    });
      
  }

}
