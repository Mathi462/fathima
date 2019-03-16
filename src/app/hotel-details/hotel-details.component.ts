import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  image: any = { url: "assets/img.jpg" }
  constructor() { }

  ngOnInit() {
  }

}
