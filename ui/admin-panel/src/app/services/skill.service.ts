import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminSkill } from '../models/admin/admin-skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http:HttpClient) { }

  //get skill list
  data: any = {
    "pageIndex": 1,
    "pageSize": 10,
    "sortOrder": "true",
    "sortColumn": "",
    "searchQuery": ""
  };

  getSkillList() {
    return this.http.post('https://apit2.web2.anasource.com/admin/Skills/GetList', this.data)
  }

  //add skill
  addSkill(data:AdminSkill){
    return this.http.post('https://apit2.web2.anasource.com/admin/Skills/Add',data)
  }

  //edit skill
  editSkill(data:AdminSkill){
    return this.http.post('https://apit2.web2.anasource.com/admin/Skills/Edit/'+ data.id,data)
  }

  //delete skill
  deleteSkill(id:number){
    return this.http.post('https://apit2.web2.anasource.com/admin/Skills/Delete/'+ id,{})
  }


}
