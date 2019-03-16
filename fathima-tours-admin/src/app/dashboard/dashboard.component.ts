import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  theme: any;
  curntTheme : any ;
  constructor(private  _apiService : ApiService) { 
   this.getTheme()
  }

  ngOnInit() {
  }
  getTheme() {
    this._apiService.getTheme().then(d=> {
      this.theme = d ; 
      this.theme = this.theme.data;
      console.log(this.theme)
    })
  }
  updateTheme() {
    let theme = {
      theme : true,
      value : this.curntTheme
    }
    this._apiService.theme(theme).then(response => {
      console.log(response)
      
    })
  }
}
