import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
export interface Link {
  name: string;
  icon: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private router:Router) { }
  selectedOption: string = 'home';

  

  links:Link[]=[
    {
      name:'home',
      icon:'home'
    },
    {
      name:'country',
      icon:'flag'
    }
  ];

  ActiveLink(event:any){
    this.selectedOption=event.target.innerText.split(' ')[0];
    // console.log(event.target.innerText.split(' ')[0]);
  }
}
