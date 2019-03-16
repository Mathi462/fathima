import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent implements OnInit {
  restaurantForm :FormGroup

  restaurant_Catogery: any = ['Normal', 'three_star', 'four_star', 'five_star', 'six_star', 'seven_star'];
  status: any = ['None', 'Activated', 'Deactivated', 'Suspended', 'Withheld', 'Registered', 'Activation Pending'];
  payment: any = ['None', 'Advance Payment', 'Cash on Arrival', 'Credit'];
  cities: any = ['Salem', 'Hyderabad', 'Mumbai', 'New Delhi', 'Chennai', 'cochin'];
  states: any = ['Tamil nadu', 'Andhra pradesh', 'Maharastra', 'Kerala', 'Telangana'];
  countries: any = ['India', 'US', 'Europe'];

  ngOnInit() {
  }

  constructor(public formBuilder: FormBuilder,public apiService : ApiService,private router: Router)  {

    this.restaurantForm = this.formBuilder.group({

      name: [''],
      
      restaurant_Catogery: [''],
      status: [''],
      payment_Catogery: [''],
      address: [''],
      location: [''],
      landmark: [''],
      city: [''],
      State: [''],
      Country: [''],
      pincode: [''],
      salesContact: [''],
      salesContactNum: [''],
      sales_Email: [''],
      reservationContact: [''],
      reservationContactNum: [''],
      reservation_Email: [''],
      websites: [''],
      faxnumber: [''],
      meals_type:[['']],
      menu_type:[['']],
      hotel_facilitys: this.formBuilder.array([]),
    })

    let control = <FormArray>this.restaurantForm.controls['hotel_facilitys'];
    control.push(this.initCountry());
   }

   initCountry() {
    return this.formBuilder.group({
      meals_type: [['']]
    });
  }
  addCountry() {
    let control = <FormArray>this.restaurantForm.controls['hotel_facilitys'];
    control.push(this.initCountry());
  }

  remove(event) {
    console.log(event)
    let control = <FormArray>this.restaurantForm.controls['hotel_facilitys']
    control.removeAt(event)

  }

  onSubmit(){
    console.log(this.restaurantForm.value)
  }
  

}
