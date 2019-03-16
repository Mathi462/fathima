import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-site-seeing',
  templateUrl: './site-seeing.component.html',
  styleUrls: ['./site-seeing.component.scss']
})
export class SiteSeeingComponent implements OnInit {

  title = 'prakashaangular';
  //Html static variables
  paymentOptions: any = ["None", "Cash", "Credit", "Non Credit"]
  sessionPeriods: any = ["None", "Fullday", "Morning", "AfterNoon", "Evening", "Night"]
  seatTypes: any = ["None", "VIP", "GOLD"]
  mealsTypes: any = ["None", "Breakfast", "Lunch", "Dinner"]

  registerForm: FormGroup;

  constructor( public formBuilder: FormBuilder) { }
  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      

        name:[''],
        paymentOption:[''],
        sessionPeriod:[''],
        guidePrice:[''],
        displayText:[''],
        address:[''],
        location:[''],
        city:[''],
        state:[''],
        country:[''],
        pincode:[''],
        contactNumber:[''],
        contactName:[''],
        faxNumber:[''],
        email:[''],
        visits: this.formBuilder.array([]),
        visits2: this.formBuilder.array([]),
        
    });
    let control1 = <FormArray>this.registerForm.controls['visits'];
    control1.push(this.initTiming());
    let control2 = <FormArray>this.registerForm.controls['visits2'];
    control2.push(this.initTariff());

  }

  initTiming() {
    return this.formBuilder.group({
      showName:[''],
        showTime:[''],
        pickupTime:[''],
        dropoffTime:[''],
      });
    }
      initTariff() {
    return this.formBuilder.group({
      seatType:[''],
        mealsType:[''],
        mealsAdultPrice:[''],
        mealsChildPrice:[''],
        sicAdultPrice:[''],
        sicChildPrice:[''],
        privateAdultPrice:[''],
        privateChildPrice:['']
    });
    }
    removeTiming(event) {
      console.log(event)
      let control1 = <FormArray>this.registerForm.controls['visits']
      control1.removeAt(event)
  
    }
    addTiming() {
      let control1 = <FormArray>this.registerForm.controls['visits'];
      control1.push(this.initTiming());
    }
    removeTariff(event) {
      console.log(event)
      let control2 = <FormArray>this.registerForm.controls['visits2']
      control2.removeAt(event)
  
    }
    addTariff() {
      let control2 = <FormArray>this.registerForm.controls['visits2'];
      control2.push(this.initTariff());
    }
  onSubmit() {
   
   console.log(this.registerForm.value)

}

}
