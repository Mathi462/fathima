import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SiteSeeingComponent } from './site-seeing/site-seeing.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { ViewHotelComponent } from './view-hotel/view-hotel.component';
import { EditHotelComponent } from './view-hotel/edit-hotel.component';
import { AddRestaurantComponent } from './restaurant/add-restaurant/add-restaurant.component';
import { ViewRestaurantComponent } from './restaurant/view-restaurant/view-restaurant.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data : {   title : 'Dashboard' }
  } , 
  { path : 'site-seeing'  ,  component : SiteSeeingComponent  },
  { path : 'update-hotel' ,  component : UpdateHotelComponent },
  { path : 'view-hotel'   ,  component : ViewHotelComponent },
  { path : 'edit-hotel'   ,  component : EditHotelComponent },
  { path : 'add-restaurant'   ,  component : AddRestaurantComponent },
  { path : 'view-restaurant'   ,  component : ViewRestaurantComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
