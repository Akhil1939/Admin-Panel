import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { HomeComponent } from './components/home/home.component';
import { CountryListingComponent } from './components/country/country-listing/country-listing.component';
import { CountryUpsertComponent } from './components/country/country-upsert/country-upsert.component';

const routes: Routes = [
  {
    path:'',
    component:AdminLayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },
      {
        path:'home',
        component:HomeComponent,
      },
      {
        path:'country',
        component:CountryListingComponent,
        children:[
          {
            path:'add',
            component:CountryUpsertComponent,
          }
        ]
      }
    ]
      
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
