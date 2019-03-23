import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { EventsComponent } from './events/events.component';
import { MenuComponent } from './menu/menu.component';
import { RoomComponent } from './room/room.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HotelComponent } from './hotel/hotel.component';
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
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { DeleteComponent } from './delete/delete.component';
import { TransferComponent } from './transfer/transfer.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'hotel',
    component:HotelComponent
  },
  {
    path:'hotel-reserve',
    component:HotelReserveComponent
  },
  {
    path:'hotel-details',
    component:HotelDetailsComponent
  },
  {
    path:'home-full',
    component:HomeFullComponent
  },
  {
    path:'home-black',
    component:HomeBlackComponent
  },
  {
    path:'room-parallax',
    component:RoomParallaxComponent
  },
  {
    path:'room-details',
    component:RoomDetailsComponent
  },
  {
    path:'room-details-block',
    component:RoomDetailsBlockComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'create-package',
    component:CreatePackageComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },

  {
    path:'amenities',
    component:AmenitiesComponent
  },
  {
     path:'events',
     component:EventsComponent
  },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'room',
    component:RoomComponent
  },
  {
    path:'services',
    component:ServicesComponent
  },
  {
    path:'aminities1',
    component:Aminities1Component
  },
  {
    path:'collapsible',
    component:CollapsibleComponent
  },
  {
    path:'db-activity',
    component:DbActivityComponent
  },
  {
    path:'db-booking',
    component:DbBookingComponent
  },
  {
    path:'db-event',
    component:DbEventComponent
  },
  {
    path:'db-new-booking',
    component:DbNewBookingComponent
  },
  {
    path:'db-profile',
    component:DbProfileComponent
  },
  {
    path:'booking',
    component:BookingComponent
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'blog-inner',
    component:BlogInnerComponent
  },
  {
    path:'gallery',
    component:GalleryComponent
  },
  {
    path:'gallery1',
    component:Gallery1Component
  },
  {
    path:'gallery2',
    component:Gallery2Component
  },
  {
    path:'del',
    component:DeleteComponent
  },
  {
    path:'transfer',
    component:TransferComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
