import { Component, OnInit, NgZone } from '@angular/core';

import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';




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

  siteDetails: any = {}
  siteDetails1 : any 

  siteSeeingData: any


  constructor(private _apiService: ApiService, public formBuilder: FormBuilder, public snackBar: MatSnackBar, public ngZone: NgZone, public router: Router,
    public httpClient: HttpClient) {

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
      this.setEventSize()
      this.mapCalling()
      this.getSiteData()

    }



  }

  ngOnInit() {


  }

  getSiteData() {
    
    this._apiService.getSite().then(result => {
      
      console.log(result)
      this.siteDetails1 = result
      console.log(this.siteDetails1)
      
      this.siteDetails = this.siteDetails1.extras
      console.log(this.siteDetails)
      

    })
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


  setEventSize() {
    console.log(this.date.length)
    this.siteSeeingData
  }

 

  dateChange(event) {
    console.log(event)

  }




  getCitySiteData(city, i) {
    console.log(city)
    console.log(i)
    var startDate = city.arrDate
    var endDate = city.depDate


  }


  mapCalling() {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'


    })

    //  let headers = ("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT")

    let body = {
      origins: '11.6693517,78.1392038',
      destinations: '11.6541948,78.1581402'
    }


    var url = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=' + body.origins + '&destinations=' + body.destinations + '&key=AIzaSyDHZh-MLj7m8hl7qloX1_w2_pdgTC_QreA'




  }





}