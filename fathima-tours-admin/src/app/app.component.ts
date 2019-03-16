import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

/** @title Responsive sidenav */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav : any =[
   {
    name : "Change Theme to Vendor",
    route : "dashboard"
   },
   {
    name : "Site Seeing",
    route : "site-seeing"
   },
   {
    name : "Update Hotel",
    route : "update-hotel"
   },
   {
    name : "View Hotel",
    route : "view-hotel"
   },
   {
    name : "Add Restaurant",
    route : "add-restaurant"
   },
   {
    name : "View Restaurant",
    route : "view-restaurant"
   }
   
  ]

  

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */