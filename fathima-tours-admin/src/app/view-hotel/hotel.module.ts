import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ViewHotelComponent } from './view-hotel.component';
import { ApiService } from '../api.service';
import { CustomModuleModule } from '../custom-module/custom-module.module';
import { EditHotelComponent } from './edit-hotel.component';




@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CustomModuleModule
  ],
  declarations: [
      ViewHotelComponent,
      EditHotelComponent
  ],
    
    providers: [ ApiService,HttpClientModule]
})
export class ViewHotelModule { }