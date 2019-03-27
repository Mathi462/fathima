import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url : any = "http://localhost:9000/";       
  constructor(public httpClient : HttpClient ) { }

  getCountryStateByPincode(pincode) {
    return new Promise((reslove) => {
      this.httpClient.get("https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAGWx4UpiWCrX-WS1MB8pZmpscx5-CSKBc&address="+pincode).subscribe(response => {
        reslove(response)
      })
    })
  }
  addCreatePackage(body){
    let headers = new  HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    })
    return new Promise ((resolve)=>{
      this.httpClient.post(this.url + "angular-travel/create-package",body,{headers : headers}).subscribe(res=>{
        resolve(res)
      },
      err=>{
        resolve(err)
      })
    })
  }
  getDatas() {
    
  }
  getTheme() {

    let headers = new HttpHeaders( {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
     })
     return new Promise ((resolve)=>{
      this.httpClient.get(this.url + "angular-travel/get-curr-theme",{headers : headers}).subscribe(res=>{
        resolve(res)
      },
      err=>{
        resolve(err)
      })
    })
  }
  getHotelDetails(body)  {
     let headers = new HttpHeaders( {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
     })
     
     return new Promise ((resolve)=>{
      this.httpClient.get("http://ec2-34-220-166-216.us-west-2.compute.amazonaws.com:8080/fathimatours/data/hotels").subscribe(res=>{
        resolve(res)
        console.log(res)
      },
      err=>{
        resolve(err)
      })
    })
  }
  
   
  getSiteSeeing(body) {
    let headers = new HttpHeaders( {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
     })
     console.log("angular-travel/view-hotel/")
     return new Promise ((resolve)=>{
      this.httpClient.get(this.url + "angular-travel/get-site-seeing/"+body,{headers : headers}).subscribe(res=>{
        resolve(res)
      },
      err=>{
        resolve(err)
      })
    })
  }


  getfoodDetails(body) {
    let headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
     })
    
    //  console.log(this.url + "angular-travel/get-food-details/"+body)
     return new Promise ((resolve)=>{
      this.httpClient.get(this.url + "angular-travel/get-food-details/"+body,{headers : headers}).subscribe(res=>{
        resolve(res)
      },
      err=>{
        resolve(err)
      })
    })
  }




  getSite(data) {
    let headers = new HttpHeaders( {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
     })
     
     console.log(data)
     
     return new Promise ((resolve)=>{
      this.httpClient.get("http://ec2-34-220-166-216.us-west-2.compute.amazonaws.com:8080/fathimatours/data/bookingrequest"+data,{headers : headers}).subscribe(res=>{
        resolve(res)
        // console.log(res)
      },
      err=>{
        resolve(err)
        console.log(err)
      })
    })
  }

  getSite1(data) {
    let headers = new HttpHeaders( {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
     })
     
     console.log(data)
     
     return new Promise ((resolve)=>{
      this.httpClient.post("http://ec2-34-220-166-216.us-west-2.compute.amazonaws.com:8080/fathimatours/data/bookingrequest",data,{headers : headers}).subscribe(res=>{
        resolve(res)
        // console.log(res)
      },
      err=>{
        resolve(err)
        console.log(err)
      })
    })
  }

}
