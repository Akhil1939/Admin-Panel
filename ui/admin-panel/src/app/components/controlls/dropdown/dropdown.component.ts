import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { dropdownItem } from 'src/app/models/dropdownList.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit{
  @Input() label: string = '';
  @Input() items: dropdownItem[] = [];

  @Output() selectedValueChange = new EventEmitter<string>();
  dropdown:string = '';
  selectedValue: string = '';
ngOnInit(){
  this.dropdown = this.items.filter(x=>x.selected == true)[0].value; 
  this.selectedValueChange.emit(this.dropdown);
}
SelectionChange() {
    this.selectedValueChange.emit(this.dropdown);
   
  }
}
