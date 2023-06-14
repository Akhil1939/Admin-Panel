import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

interface countryList{
  name:string;
  status:number

}
@Component({
  selector: 'app-country-listing',
  templateUrl: './country-listing.component.html',
  styleUrls: ['./country-listing.component.css']
})
export class CountryListingComponent {
  displayedColumns: string[] = ['name', 'status', 'actions'];
  dataSource:countryList[]=[
    {
      name:'India',
      status:1
    },
    {
      name:'USA',
      status:1
    },
  ];


  length = 500;
  pageSize = 10;
  pageIndex = 0;
  currentPage = 1;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;

  handlePageEvent(event: PageEvent) {
    
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.currentPage = event.pageIndex + 1;
    console.log(this.currentPage)
  }
}
