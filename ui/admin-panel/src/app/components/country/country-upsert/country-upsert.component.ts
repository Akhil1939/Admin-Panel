import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dropdownItem } from 'src/app/models/forms-controlls/dropdownList.Model';
=======
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { dropdownItem } from 'src/app/models/dropdownList.model';

>>>>>>> 63298cf39cb4ee5ba6a60cc7c01a9cdab676f740

@Component({
  selector: 'app-country-upsert',
  templateUrl: './country-upsert.component.html',
  styleUrls: ['./country-upsert.component.css']
})
<<<<<<< HEAD
export class CountryUpsertComponent implements OnInit {
updateForm: boolean = false;

  countryName: string = '';
  status: string = '';
  statusOptions: dropdownItem[] = [
    { value: '1', viewValue:'Active', selected: true },
    { value: '0', viewValue:'Inactive', selected: false }
  ];

ngOnInit(): void {
  const countryId = this.getIdFromUrl();
  if (countryId) {
    this.updateForm = true;
  console.log(countryId);
  }
}

getIdFromUrl(): number | null {
  const url = window.location.toString();
  const matches = url.match(/\/country\/(\d+)/);
  if (matches && matches[1]) {
    return parseInt(matches[1], 10);
  }
  return null;
}


  onNameChange(value: string) {
    this.countryName = value;
    console.log(this.countryName);
  }
  onStatusChange(value: string) {
    this.status = value;
    console.log(this.status);
  }
  AddCountry(){
    console.log('Country Added',{countryName:this.countryName,status:this.status});
  }
=======
export class CountryUpsertComponent  {
>>>>>>> 63298cf39cb4ee5ba6a60cc7c01a9cdab676f740

  

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


