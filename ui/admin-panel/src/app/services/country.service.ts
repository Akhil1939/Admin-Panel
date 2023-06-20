import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  //get country list

  data: any = {
    pageIndex: 1,
    pageSize: 10,
    sortOrder: 'true',
    sortColumn: '',
    searchQuery: '',
  };

  Headers: any = {
    'Access-Control-Allow-Origin': '*',
  };
  getCountryList(): Observable<any> {
    return this.http.post(
      'https://apit2.web2.anasource.com/admin/Countries/GetList',
      this.data
    );
  }
}
