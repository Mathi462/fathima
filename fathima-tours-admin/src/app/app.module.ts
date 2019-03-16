import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule,MatMenuModule, MatSelectChange, MatSelectModule} from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomModuleModule } from './custom-module/custom-module.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SiteSeeingComponent } from './site-seeing/site-seeing.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { ViewHotelModule } from './view-hotel/hotel.module';
import { AddRestaurantComponent } from './restaurant/add-restaurant/add-restaurant.component';
import { ViewRestaurantComponent } from './restaurant/view-restaurant/view-restaurant.component';
import { UpdateRestaurantComponent } from './restaurant/update-restaurant/update-restaurant.component';

// import { ViewHotelComponent } from './view-hotel/view-hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SiteSeeingComponent,
    UpdateHotelComponent,
    AddRestaurantComponent,
    ViewRestaurantComponent,
    UpdateRestaurantComponent,
    
  
    // ViewHotelComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomModuleModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    ViewHotelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
