import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from 'fathima-tours-admin/src/app/api.service';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  item: any
  city_list: any
  date: any = []
  vehicle_Type = ['Car','van','Bus/Coach','Double Decker']
  guide_details=['With Guide','WithOut Guide']

  constructor(private _apiService: ApiService, public formBuilder: FormBuilder, public snackBar: MatSnackBar, public ngZone: NgZone, public router: Router) {

    this.item = JSON.parse(localStorage.getItem('traveller-quotation'));

    console.log(this.item)
    this.city_list = this.item.visits
    console.log(this.city_list)

    for (let j = 0; j < this.city_list.length; j++) {

      console.log(this.city_list[j].city)

      console.log(this.city_list[j].arrDate)
      console.log(this.city_list[j].depDate)
      var startDate = new Date(this.city_list[j].arrDate);
      var endDate = new Date(this.city_list[j].depDate);
      var city = this.city_list[j].city

      this.callDate(startDate, endDate, city)
      



    }



  }


  ngOnInit() {
  }


  callDate(startDate, endDate, city) {

    console.log(city)

    var startDate = startDate
    var endDate = endDate

    var getDateArray = function (start, end, city) {
      var arr = [] = new Array();
      var dt = new Date(start);
      console.log(dt)
      while (dt <= end) {
        console.log(dt)
        arr.push({ date: new Date(dt), city: city });
        dt.setDate(dt.getDate() + 1);
      }
      return arr;
    }

    var dateArr = getDateArray(startDate, endDate, city);
    console.log(dateArr)

    for (let i = 0; i < dateArr.length; i++) {
      this.date.push(dateArr[i])
    }


    console.log(this.date)
  }
}
