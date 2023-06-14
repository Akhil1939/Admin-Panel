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
import {FormsModule} from '@angular/forms';
import { TextInputComponent } from './components/controlls/text-input/text-input.component';
import { ActionButtonComponent } from './components/controlls/action-button/action-button.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModulesModule } from './modules/material.modules';

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
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModulesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
