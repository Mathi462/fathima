import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: any = "http://ec2-18-220-225-52.us-east-2.compute.amazonaws.com:9000/angular-travel";
  
  headerOptions: any;
  

  constructor(public httpClient: HttpClient) {

  }

  theme(data) {
    let headers = new  HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    })
    return new Promise((resolve) => {
      this.httpClient.put(this.url + "/update-theme/5beff3873ea03d1ce3da1181", data , {headers : headers}).subscribe(response=>{
        resolve(response)
      },err=>{
        resolve(err)
      })
    })
  }
  getTheme() {
    let headers = new  HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    })
    return new Promise((resolve) => {
      this.httpClient.get(this.url + "/update-theme", {headers : headers}).subscribe(response=>{
        resolve(response)
      },err=>{
        resolve(err)
      })
    })
  }

  
  
  

  PostData(passingUrl, body) {
    return new Promise((res) => {
      this.headerOptions = new HttpHeaders();
      this.httpClient.post(this.url + passingUrl, body, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).subscribe(data => {
        res(data);
      }, err => {
        console.error(err);
      });
    });
  }

  GetAllData(passingUrl) {
    return new Promise((res) => {
      this.headerOptions = new HttpHeaders();
      this.httpClient.get(this.url + passingUrl, {
        headers: {
          'Content-Type': 'application/json'
          
        }
      }).subscribe(data => {
        res(data);
      }, err => {
        console.error(err);
      });
    });
  }

  updateData(passingUrl, body) {
    return new Promise((res) => {
      this.headerOptions = new HttpHeaders();
      this.httpClient.put(this.url + passingUrl, body, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).subscribe(data => {
        res(data);
      }, err => {
        console.error(err);
      });
    });
  }

  deleteData(passingUrl) {
    return new Promise((res) => {
      this.headerOptions = new HttpHeaders();
      this.httpClient.delete(this.url + passingUrl, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).subscribe(data => {
        res(data);
      }, err => {
        console.error(err);
      });
    });
  }

      
          
        
      
}
