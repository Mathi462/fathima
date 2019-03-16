import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../api.service';
import { CustomModuleModule } from '../custom-module/custom-module.module';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { ViewRestaurantComponent } from './view-restaurant/view-restaurant.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';





@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CustomModuleModule
  ],
  declarations: [
      AddRestaurantComponent,
      ViewRestaurantComponent,
      UpdateRestaurantComponent
      
  ],
    
    providers: [ ApiService,HttpClientModule]
})
export class RestaurentModule { }