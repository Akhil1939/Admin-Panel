<<<<<<< HEAD
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { dropdownItem } from 'src/app/models/forms-controlls/dropdownList.Model';
=======
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { dropdownItem } from 'src/app/models/dropdownList.model';
>>>>>>> 63298cf39cb4ee5ba6a60cc7c01a9cdab676f740

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
<<<<<<< HEAD
export class DropdownComponent {
  @Input() label: string = '';
  @Input() optionsList : dropdownItem[] = [];
=======
export class DropdownComponent implements OnInit{
  @Input() label: string = '';
  @Input() items: dropdownItem[] = [];
>>>>>>> 63298cf39cb4ee5ba6a60cc7c01a9cdab676f740

  @Output() selectedValueChange = new EventEmitter<string>();
  dropdown:string = '';
  selectedValue: string = '';
ngOnInit(){
<<<<<<< HEAD
  this.dropdown = this.optionsList.filter(x=>x.selected == true)[0].value; 
=======
  this.dropdown = this.items.filter(x=>x.selected == true)[0].value; 
>>>>>>> 63298cf39cb4ee5ba6a60cc7c01a9cdab676f740
  this.selectedValueChange.emit(this.dropdown);
}
SelectionChange() {
    this.selectedValueChange.emit(this.dropdown);
   
  }
<<<<<<< HEAD
=======

>>>>>>> 63298cf39cb4ee5ba6a60cc7c01a9cdab676f740
}
