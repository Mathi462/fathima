import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ThemeService } from './theme-service/theme.service';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fathima-Tours';
  image: any = { url: "assets/img.jpg" }
  isTheme :  Observable<boolean>;
  theme : any;
  themename : any ='dark-theme';
  constructor(private _apiService : ApiService , public themeService : ThemeService) {
    this.getTheme()
    this.themename = localStorage.getItem("theme")
  }
  getTheme() {
    this._apiService.getTheme().then(d => {
      // console.log(d) 
      this.theme = d
      // this.theme = this.theme.data[0]
      this.themename = this.theme.value
      this.theme = this.theme.theme
      localStorage.setItem("theme" , this.themename)
      // console.log(this.themename)
      // console.log(this.theme)
      this.themeService.setTheme(this.theme)

    })
  }
  ngOnInit() {

  }
}
