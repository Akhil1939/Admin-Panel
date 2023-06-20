import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { dropdownItem } from 'src/app/models/dropdownList.model';


@Component({
  selector: 'app-country-upsert',
  templateUrl: './country-upsert.component.html',
  styleUrls: ['./country-upsert.component.css']
})
export class CountryUpsertComponent  {

  

  name:string='';
  status:string='';
  statusList:dropdownItem[]=[
    {value:'Active', viewValue:'Active', selected:true},
    {value:'Inactive', viewValue:'Inactive', selected:false},
  ];

  onNameChange(event:string){
    console.log("name",event);
    this.name = event;
   
  }
  onStatusChange(event:string){
    console.log("status",event);
    this.status = event;
  }

  onSubmit(){
    console.log("form submitted",{"name":this.name,"status":this.status});
  }
}


