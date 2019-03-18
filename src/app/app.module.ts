import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { RoomComponent } from './room/room.component';

import { ServicesComponent } from './services/services.component';

import { MenuComponent } from './menu/menu.component';

import { EventsComponent } from './events/events.component';

import { AmenitiesComponent } from './amenities/amenities.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { DashboardComponent } from './dashboard/dashboard.component';

import { HotelComponent } from './hotel/hotel.component';

import { AboutComponent } from './about/about.component';

import { ContactComponent } from './contact/contact.component';

import { HotelReserveComponent } from './hotel-reserve/hotel-reserve.component';

import { HomeFullComponent } from './home-full/home-full.component';

import { HomeBlackComponent } from './home-black/home-black.component';

import { RoomParallaxComponent } from './room-parallax/room-parallax.component';

import { RoomDetailsComponent } from './room-details/room-details.component';

import { Aminities1Component } from './aminities1/aminities1.component';

import { CollapsibleComponent } from './collapsible/collapsible.component';

import { DbActivityComponent } from './db-activity/db-activity.component';

import { DbBookingComponent } from './db-booking/db-booking.component';

import { DbEventComponent } from './db-event/db-event.component';

import { DbNewBookingComponent } from './db-new-booking/db-new-booking.component';

import { BookingComponent } from './booking/booking.component';

import { BlogComponent } from './blog/blog.component';

import { BlogInnerComponent } from './blog-inner/blog-inner.component';

import { GalleryComponent } from './gallery/gallery.component';

import { Gallery1Component } from './gallery1/gallery1.component';

import { Gallery2Component } from './gallery2/gallery2.component';

import { DbProfileComponent } from './db-profile/db-profile.component';

import { HeaderComponent } from './header/header.component';

import { FooterComponent } from './footer/footer.component';

import { RoomDetailsBlockComponent } from './room-details-block/room-details-block.component';

import { CreatePackageComponent } from './create-package/create-package.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import {HttpClientModule} from '@angular/common/http'

import { CustomModuleModule } from './custom-module/custom-module.module';


import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {MaterialModule} from './material';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { DeleteComponent } from './delete/delete.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomComponent,
    ServicesComponent,
    MenuComponent,
    EventsComponent,
    AmenitiesComponent,
    DashboardComponent,
    HotelComponent,
    AboutComponent,
    ContactComponent,
    HotelReserveComponent,
    HomeFullComponent,
    HomeBlackComponent,
    RoomParallaxComponent,
    RoomDetailsComponent,
    Aminities1Component,
    CollapsibleComponent,
    DbActivityComponent,
    DbBookingComponent,
    DbEventComponent,
    DbNewBookingComponent,
    BookingComponent,
    BlogComponent,
    BlogInnerComponent,
    GalleryComponent,
    Gallery1Component,
    Gallery2Component,
    DbProfileComponent,
    HeaderComponent,
    FooterComponent,
    RoomDetailsBlockComponent,
    CreatePackageComponent,
    HotelDetailsComponent,
    DeleteComponent
  ],
  imports: [

    BrowserModule,

    AppRoutingModule,

    AngularFontAwesomeModule,

    BrowserAnimationsModule,

    ReactiveFormsModule,

    FormsModule,
    
    HttpClientModule,

    CustomModuleModule,
    MDBBootstrapModule.forRoot(),
    MaterialModule,

    NgMultiSelectDropDownModule.forRoot()

    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
