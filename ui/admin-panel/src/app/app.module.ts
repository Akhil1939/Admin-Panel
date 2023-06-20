import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CountryListingComponent } from './components/country/country-listing/country-listing.component';
import { CountryUpsertComponent } from './components/country/country-upsert/country-upsert.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TextInputComponent } from './components/controlls/text-input/text-input.component';
import { ActionButtonComponent } from './components/controlls/action-button/action-button.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModulesModule } from './modules/material.modules';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
>>>>>>> 63298cf39cb4ee5ba6a60cc7c01a9cdab676f740
import { DropdownComponent } from './components/controlls/dropdown/dropdown.component';
import { DropdownComponent } from './components/controlls/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CountryListingComponent,
    CountryUpsertComponent,

    TextInputComponent,
    ActionButtonComponent,
    AdminLayoutComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModulesModule,
    FormsModule,
    ReactiveFormsModule
<<<<<<< HEAD
    HttpClientModule,
    FormsModule,
=======
>>>>>>> 63298cf39cb4ee5ba6a60cc7c01a9cdab676f740
    ReactiveFormsModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
