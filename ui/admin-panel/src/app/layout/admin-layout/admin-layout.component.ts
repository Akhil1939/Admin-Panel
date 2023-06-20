import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css', '../../components/layout/sidebar/sidebar.component.css']
})
export class AdminLayoutComponent {
  events: string[] = [];
  isSidenavOpen: boolean=true;

  shouldRun = true;
}
