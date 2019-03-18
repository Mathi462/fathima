import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from 'fathima-tours-admin/src/app/api.service';
import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

// import { range } from 'rxjs';

// import * as moment from 'moment';

var moment = require('moment');
var twix = require('twix');



@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {


  item: any
  city_list: any = []

  itr: any
  range: any
  date: any = []

  siteDetails: any = []


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



  // callDate(startDate, endDate, city) {

  //   console.log(city)

  //   var startDate = startDate
  //   var endDate = endDate

  //   var getDateArray = function (start, end, city) {
  //     var arr = [] = new Array();
  //     var dt = new Date(start);
  //     console.log(dt)
  //     while (dt <= end) {
  //       console.log(dt)
  //       arr.push({ date: new Date(dt), city: city });
  //       dt.setDate(dt.getDate() + 1);
  //     }
  //     return arr;
  //   }

  //   var dateArr = getDateArray(startDate, endDate, city);
  //   console.log(dateArr)

  //   this.date = dateArr
  // }

  callDate(startDate, endDate, city) {

    var itr = moment.twix(new Date(startDate - 1), new Date(endDate-1)).iterate("days");
    var range = [];
    while (itr.hasNext()) {
      range.push(itr.next().toDate())
    }
    console.log(range);
    this.date.push(range)


  }


  setSize() {
    for (let k = 0; k < this.city_list; k++) {
      console.log(this.siteDetails[k])

    }
  }

  dateChange(event) {
    console.log(event)

  }



}
