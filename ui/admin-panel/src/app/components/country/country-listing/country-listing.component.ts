import { CountryService } from './../../../services/country.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { countryList } from 'src/app/models/countryList.model';


@Component({
  selector: 'app-country-listing',
  templateUrl: './country-listing.component.html',
  styleUrls: ['./country-listing.component.css']
})
export class CountryListingComponent implements OnInit {

  constructor(private CountryService:CountryService) { }
  displayedColumns: string[] = ['name', 'status', 'actions'];
  dataSource:countryList[]=[
    {
      id:1,
      name:'India',
      status:1
    },
    {
      id:2,
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

  ngOnInit(): void {
    this.CountryService.getCountryList().subscribe((res)=>{
      console.log(res)
    }
    )
  }
}
