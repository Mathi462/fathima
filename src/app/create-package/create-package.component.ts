import { Component, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { MatSnackBar, MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { Router } from '@angular/router';

import { COMMA, ENTER } from '@angular/cdk/keycodes';


import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.css']
})
export class CreatePackageComponent implements OnInit {
  [x: string]: any;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['India'];
  allFruits: string[] = [

    ' Afghanistan'
    , 'Albania'
    , 'Algeria'
    , 'American Samoa'
    , 'Andorra'
    , 'Angola'
    , 'Anguilla'
    , 'Antarctica'
    , 'Antigua And Barbuda'
    , 'Argentina'
    , 'Armenia'
    , 'Aruba'
    , 'Australia'
    , 'Austria'
    , 'Azerbaijan'
    , 'Bahamas The'
    , 'Bahrain'
    , 'Bangladesh'
    , 'Barbados'
    , 'Belarus'
    , 'Belgium'
    , 'Belize'
    , 'Benin'
    , 'Bermuda'
    , 'Bhutan'
    , 'Bolivia'
    , 'Bosnia and Herzegovina'
    , 'Botswana'
    , 'Bouvet Island'
    , 'Brazil'
    , 'British Indian Ocean Territory'
    , 'Brunei'
    , 'Bulgaria'
    , 'Burkina Faso'
    , 'Burundi'
    , 'Cambodia'
    , 'Cameroon'
    , 'Canada'
    , 'Cape Verde'
    , 'Cayman Islands'
    , 'Central African Republic'
    , 'Chad'
    , 'Chile'
    , 'China'
    , 'Christmas Island'
    , 'Cocos (Keeling) Islands'
    , 'Colombia'
    , 'Comoros'
    , 'Congo'
    , 'Congo The Democratic Republic Of The'
    , 'Cook Islands'
    , 'Costa Rica'
    , 'Cote D',
    'Ivoire (Ivory Coast)'
    , 'Croatia (Hrvatska)'
    , 'Cuba'
    , 'Cyprus'
    , 'Czech Republic'
    , 'Denmark'
    , 'Djibouti'
    , 'Dominica'
    , 'Dominican Republic'
    , 'East Timor'
    , 'Ecuador'
    , 'Egypt'
    , 'El Salvador'
    , 'Equatorial Guinea'
    , 'Eritrea'
    , 'Estonia'
    , 'Ethiopia'
    , 'External Territories of Australia'
    , 'Falkland Islands'
    , 'Faroe Islands'
    , 'Fiji Islands'
    , 'Finland'
    , 'France'
    , 'French Guiana'
    , 'French Polynesia'
    , 'French Southern Territories'
    , 'Gabon'
    , 'Gambia The'
    , 'Georgia'
    , 'Germany'
    , 'Ghana'
    , 'Gibraltar'
    , 'Greece'
    , 'Greenland'
    , 'Grenada'
    , 'Guadeloupe'
    , 'Guam'
    , 'Guatemala'
    , 'Guernsey and Alderney'
    , 'Guinea'
    , 'Guinea-Bissau'
    , 'Guyana'
    , 'Haiti'
    , 'Heard and McDonald Islands'
    , 'Honduras'
    , 'Hong Kong S.A.R.'
    , 'Hungary'
    , 'Iceland'
    , 'India'
    , 'Indonesia'
    , 'Iran'
    , 'Iraq'
    , 'Ireland'
    , 'Israel'
    , 'Italy'
    , 'Jamaica'
    , 'Japan'
    , 'Jersey'
    , 'Jordan'
    , 'Kazakhstan'
    , 'Kenya'
    , 'Kiribati'
    , 'Korea North'
    , 'Korea South'
    , 'Kuwait'
    , 'Kyrgyzstan'
    , 'Laos'
    , 'Latvia'
    , 'Lebanon'
    , 'Lesotho'
    , 'Liberia'
    , 'Libya'
    , 'Liechtenstein'
    , 'Lithuania'
    , 'Luxembourg'
    , 'Macau S.A.R.'
    , 'Macedonia'
    , 'Madagascar'
    , 'Malawi'
    , 'Malaysia'
    , 'Maldives'
    , 'Mali'
    , 'Malta'
    , 'Man (Isle of)'
    , 'Marshall Islands'
    , 'Martinique'
    , 'Mauritania'
    , 'Mauritius'
    , 'Mayotte'
    , 'Mexico'
    , 'Micronesia'
    , 'Moldova'
    , 'Monaco'
    , 'Mongolia'
    , 'Montserrat'
    , 'Morocco'
    , 'Mozambique'
    , 'Myanmar'
    , 'Namibia'
    , 'Nauru'
    , 'Nepal'
    , 'Netherlands Antilles'
    , 'Netherlands The'
    , 'New Caledonia'
    , 'New Zealand'
    , 'Nicaragua'
    , 'Niger'
    , 'Nigeria'
    , 'Niue'
    , 'Norfolk Island'
    , 'Northern Mariana Islands'
    , 'Norway'
    , 'Oman'
    , 'Pakistan'
    , 'Palau'
    , 'Palestinian Territory Occupied'
    , 'Panama'
    , 'Papua new Guinea'
    , 'Paraguay'
    , 'Peru'
    , 'Philippines'
    , 'Pitcairn Island'
    , 'Poland'
    , 'Portugal'
    , 'Puerto Rico'
    , 'Qatar'
    , 'Reunion'
    , 'Romania'
    , 'Russia'
    , 'Rwanda'
    , 'Saint Helena'
    , 'Saint Kitts And Nevis'
    , 'Saint Lucia'
    , 'Saint Pierre and Miquelon'
    , 'Saint Vincent And The Grenadines'
    , 'Samoa'
    , 'San Marino'
    , 'Sao Tome and Principe'
    , 'Saudi Arabia'
    , 'Senegal'
    , 'Serbia'
    , 'Seychelles'
    , 'Sierra Leone'
    , 'Singapore'
    , 'Slovakia'
    , 'Slovenia'
    , 'Smaller Territories of the UK'
    , 'Solomon Islands'
    , 'Somalia'
    , 'South Africa'
    , 'South Georgia'
    , 'South Sudan'
    , 'Spain'
    , 'Sri Lanka'
    , 'Sudan'
    , 'Suriname'
    , 'Svalbard And Jan Mayen Islands'
    , 'Swaziland'
    , 'Sweden'
    , 'Switzerland'
    , 'Syria'
    , 'Taiwan'
    , 'Tajikistan'
    , 'Tanzania'
    , 'Thailand'
    , 'Togo'
    , 'Tokelau'
    , 'Tonga'
    , 'Trinidad And Tobago'
    , 'Tunisia'
    , 'Turkey'
    , 'Turkmenistan'
    , 'Turks And Caicos Islands'
    , 'Tuvalu'
    , 'Uganda'
    , 'Ukraine'
    , 'United Arab Emirates'
    , 'United Kingdom'
    , 'United States'
    , 'United States Minor Outlying Islands'
    , 'Uruguay'
    , 'Uzbekistan'
    , 'Vanuatu'
    , 'Vatican City State (Holy See)'
    , 'Venezuela'
    , 'Vietnam'
    , 'Virgin Islands (British)'
    , 'Virgin Islands (US)'
    , 'Wallis And Futuna Islands'
    , 'Western Sahara'
    , 'Yemen'
    , 'Yugoslavia'
    , 'Zambia'
    , 'Zimbabwe'

  ];
  allCities: string[] = [

    , 'Abhaynagar',
    , 'Adamighi',
    , 'Alamdanga',
    , 'Badarganj',
    , 'Bajitpur',
    , 'Bandarban',
    , 'Baniachang',
    , 'Barguna',
    , 'Barisal',
    , 'Begamganj',
    , 'Bera',
    , 'Bhairab Bazar',
    , 'Bhaluka',
    , 'Bhandaria',
    , 'Bhanga',
    , 'Bhangura',
    , 'Bheramara',
    , 'Bhola',
    , 'Boalkhali',
    , 'Bochanganj',
    , 'Bogora',
    , 'Burhanuddin',
    , 'Chandpur',
    , 'Char Bhadrasan',
    , 'Char Fasson',
    , 'Chattagam',
    , 'Chhagalnaiya',
    , 'Chhatak',
    , 'Chilmari',
    , 'Chuadanga',
    , 'Damurhuda',
    , 'Dhaka',
    , 'Dhamrai',
    , 'Dinajpur',
    , 'Dohar',
    , 'Domar',
    , 'Faridpur',
    , 'Fatikchhari',
    , 'Feni',
    , 'Fulbari',
    , 'Fulbaria',
    , 'Gafargaon',
    , 'Gaurnadi',
    , 'Gaybanda',
    , 'Gazipur',
    , 'Gomastapur',
    , 'Gopalganj',
    , 'Gopalpur',
    , 'Gurudaspur',
    , 'Habiganj',
    , 'Hajiganj',
    , 'Ishurdi',
    , 'Ishwarganj',
    , 'Itna',
    , 'Jamalpur',
    , 'Jessor',
    , 'Jhalakati',
    , 'Jhanaydah',
    , 'Jhikargachha',
    , 'Kalia',
    , 'Kaliganj',
    , 'Kaptai',
    , 'Kaunia',
    , 'Keshabpur',
    , 'Khagrachari',
    , 'Khulna',
    , 'Kishorganj',
    , 'Komilla',
    , 'Kotchandpur',
    , 'Kurigram',
    , 'Kushtiya',
    , 'Laksham',
    , 'Lakshmipur',
    , 'Lalmohan',
    , 'Lohagara',
    , 'Madaripur',
    , 'Magura',
    , 'Maimansingh',
    , 'Manikchhari',
    , 'Manikganj',
    , 'Mathbaria',
    , 'Mehendiganj',
    , 'Meherpur',
    , 'Mirzapur',
    , 'Muktagachha',
    , 'Munshiganj',
    , 'Nageshwari',
    , 'Nalchiti',
    , 'Nalitabari',
    , 'Naral',
    , 'Narayanganj',
    , 'Narsingdi',
    , 'Nator',
    , 'Naugaon',
    , 'Nawabganj',
    , 'Nesarabad',
    , 'Netrakona',
    , 'Nilphamari',
    , 'Noakhali',
    , 'Pabna',
    , 'Palang',
    , 'Panchagarh',
    , 'Pangsha',
    , 'Parbatipur',
    , 'Patiya',
    , 'Patuakhali',
    , 'Phultala',
    , 'Pirganj',
    , 'Pirojpur',
    , 'Rajbari',
    , 'Rajshahi',
    , 'Ramganj',
    , 'Ramgarh',
    , 'Ramgati',
    , 'Rangamati',
    , 'Rangpur',
    , 'Rangunia',
    , 'Raozan',
    , 'Raypur',
    , 'Roypura',
    , 'Rupganj',
    , 'Saidpur',
    , 'Sakhipur',
    , 'Sandip',
    , 'Sarishabari',
    , 'Satkaniya',
    , 'Satkhira',
    , 'Senbagh',
    , 'Shahjadpur',
    , 'Shailkupa',
    , 'Sherpur',
    , 'Sherpur',
    , 'Shibganj',
    , 'Silhat',
    , 'Sirajganj',
    , 'Sunamganj',
    , 'Tangayal',
    , 'Thakurgaon',
    , 'Trishal',
    , 'Tungi',
    , 'Tungi Para',
    , 'Ulipur',
  ]
  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  //variable to change dynamically fit,mice or group
  miceDetail: boolean = false;
  hotelDetail: boolean = false;
  groupDetail: boolean = false;

  //Overall Visit - Requirements Variable 
  hotelRequirements: any = null;

  //Hotel Variables
  hotelDetails: any = [];
  roomCategory: any = ["Deluxe"];
  hotelJson: any;

  //Site-Seeing Varibles
  selectedSession: any = [];
  siteSeeing: any = [];
  siteJson: any;
  foodJson: any
  siteSeeingDetails: any = [];
  foodDetails: any = [];
  session = {
    morning: false,
    evening: false,
    afternoon: false,
    night: false,
    morningChecked: false,
    afternoonChecked: false,
    eveningChecked: false,
    nightChecked: false
  }
  fullDay = {
    isFullday: false,
    isFulldayMultiple: false
  }

  // Html Static Variables
  rConfig: any = ["Single", "Twin", "Double", "Triple", "CWB", "CNB"];
  image: any = { url: "assets/img.jpg" }
  countries: any = ['America', 'Canada']
  cities: any = ['Bangalore', 'Chennai', 'Mysore', 'Coimbatore']
  adults: any = ['0', '1', '2', '3', '4']
  childrens: any = ['0', '1', '2', '3', '4']

  //Hotels To Book
  hotelsToBook: any = [];

  // Html Dynamic Variables
  selectedCountry: any;
  selectedCity: any;
  noOfAdult: any;
  noOfChildren: any;
  arvalDate: any = new Date();
  depDate: any = null;
  params: any;
  date: any;
  response: any;
  roomEvent: any = [[]];
  showEvent: any = [[]];

  //Overall Dynamic Variables
  proceed: any = true;

  //Booking Process Variables
  bookingProcess: any = [];
  bookHotelForm: FormGroup;
  bookingPrefer: FormGroup;

  //Arval Date and Dep Dates
  arvDate: any = []
  deparDate: any = []

  // a : any =  new Date()
  // roomConfigForm: FormGroup;
  // secondFormGroup:FormGroup; 
  constructor(private _apiService: ApiService, public formBuilder: FormBuilder, public snackBar: MatSnackBar, public ngZone: NgZone, public router: Router) {

    // this.getHotelDetails()
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
    this.bookHotelForm = formBuilder.group({
      roomCat: ['']
    })


    this.params = formBuilder.group({


      fullname: [''],
      email: [''],
      mobile: [''],
      whatsapp: [''],


      nationality: [''],
      country: [''],
      arrDate: [''],
      depDate: [''],
      paxType: [''],
      noOfAdults: [''],
      noOfChildrens: [''],
      
      // fullname: ['', Validators.required],
      // email: ['', Validators.compose([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
      // mobile: ['', Validators.compose([Validators.required, Validators.pattern('[6789][0-9]{9}')])],
      // whatsapp: ['', Validators.compose([Validators.required, Validators.pattern('[6789][0-9]{9}')])],


      // nationality: ['', Validators.required],
      // country: ['', Validators.required],
      // arrDate: ['', Validators.required],
      // depDate: ['', Validators.required],
      // paxType: ['', Validators.required],
      // noOfAdults: ['', Validators.required],
      // noOfChildrens: ['', Validators.required],

      
      roomConfigurations: formBuilder.group({
        single: [''],
        twin: [''],
        double: [''],
        triple: [''],
        cnb: [''],
        cwb: [''],

      }),
      bookingPrefer: formBuilder.group({
        hotel: [''],
        sightseeing: [''],
        transfer: [''],
        food: [''],


      }),

      visits: this.formBuilder.array([]),
    })
    this.arvDate[0] = new Date()
    this.deparDate[0] = ''
    let control = <FormArray>this.params.controls['visits'];
    control.push(this.initCountry());


    // console.log(this.params.value)
  }
  initCountry() {
    return this.formBuilder.group({
      city: ['', Validators.required],
      noOfAdults: ['', Validators.required],
      noOfChildrens: ['', Validators.required],
      arrDate: ['', Validators.required],
      depDate: ['', Validators.required],
    });
  }
  removeFromBooking() {
    this.hideHotelList = false
    this.hotelsToBook = []
    // console.log(this.hotelsToBook)
    // this.hotelsToBook.splice(this.hotelsToBook.indexOf(hotel) , 1)
  }
  matStepClick() {
    this.openSnackBar('Complete current process to proceed', "")
  }

  proceedToBook(index) {
    if (this.roomEvent.length > 0) {

      Object.assign(this.bookingProcess, {
        roomEvents: this.roomEvent[index]
      })
    }
    else {
      Object.assign(this.bookingProcess, {
        roomEvents: [index]
      })
    }
    this.hotelsToBook.push(this.bookingProcess)
    // console.log(this.hotelsToBook)
    this.closePromotion = false
    this.hideHotelList = false
    this.bookingProcess = []
  }
  remove(event) {
    this.addVisit = true
    // console.log(event)
    let control = <FormArray>this.params.controls['visits']
    // this.nextArrDate.splice(event , 1)
    control.removeAt(event)
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  addVisit: any = false;
  addCountry() {
    let control = <FormArray>this.params.controls['visits'];
    control.push(this.initCountry());
    control.at(+this.position).get('arrDate').setValue(control.at(+this.position - 1).get('depDate').value)
  }
  inRoomFac: any = ["Deluxe"];
  radioChange() {
    for (let i = 0; i < this.roomCategory.length; i++) {
      if (this.roomCategory[i] == 'Deluxe') {
        this.inRoomFac[i] = "Deluxe"
        // console.log(this.inRoomFac)
      }
      else this.inRoomFac[i] = "Standard"
    }
    // console.log(this.roomCategory)
  }
  bookConference(conf, hotel, k) {
    if (this.hotelsToBook[k] != null) {
      // console.log(conf)
      this.openSnackBar("Hotels Already in Queue", "")
    }
    else {
      this.bookingProcess = {
        hotels: hotel,
        miceHotel: conf,
        isConference: true,
      }
      this.hotelsToBook.push(this.bookingProcess)
      // console.log(this.hotelsToBook)
    }

  }
  position: any
  nextArrDate: any = [];
  depDateChange(event, i) {
    if (new Date(this.depDate) > new Date(event)) {
      this.addVisit = true
      // console.log(i)
      this.nextArrDate.push(event)
      this.position = i + 1
      // // console.log(this.depDate  +" : " +event)
    }
    else {
      // console.log(this.depDate + " : " + event)
      this.addVisit = false
      // console.log(this.addVisit)
    }
  }
  onDateChange(event) {
    // console.log(event)

  }
  ngOnInit() {
    this.params.get('arrDate').valueChanges.subscribe(value => {
      this.nextArrDate[0] = value;
      // console.log(this.nextArrDate)
    })
  }
  onSubmit() {
    // console.log(this.params.value)
    if (this.params.valid) {
      localStorage.setItem("traveller-quotation", JSON.stringify(this.params.value))
      // console.log(this.params.value)
      this.getHotelDetails()
      this.hotelRequirements = this.params.value
    }
  }

  currentHotel: any;
  closePromotion: boolean = false
  applyPromotions(promotion) {
    this.closePromotion = true
    this.openSnackBar(promotion.displayText, "")
    Object.assign(this.bookingProcess, { promotionsApplied: promotion })
    // console.log(this.bookingProcess)
  }



  getRoomEvents(check, event, k) {
    if (check.checked) {
      this.roomEvent[k].push(event)
    }
    else {
      this.roomEvent[k].splice(this.roomEvent.indexOf(event), 1)
    }

    // console.log("works")

  }


  tmp: any
  hideHotelList: any = false;
  pickHotel(visit, hotel, roomCategory, roomFacility, index, ) {
    // this.getCheckboxes()

    // console.log(this.roomEvent[index])
    if (this.hotelsToBook[index] != null) {
      // console.log(index)
      this.openSnackBar("Hotels Already in Queue", "")
    }
    else {
      // // console.log(index)
      // console.log(visit)
      var arrDate = new Date(visit.arrDate)
      var depDate = new Date(visit.depDate)
      var dayDif = (depDate.getTime() - arrDate.getTime()) / (1000 * 60 * 60 * 24);
      Object.assign(visit, {
        totalDays: dayDif
      })

      // console.log(dayDif)
      // console.log(roomFacility)
      for (let h in hotel.seasonDetails) {
        if (hotel.seasonDetails[h].compulsory) {
          this.roomEvent.push(hotel.seasonDetails[h])
        }
      }
      this.hideHotelList = true
      this.bookingProcess = {
        hotels: hotel,
        isHotel: true,
        isConference: false,
        roomCategory: roomCategory,
        roomFacility: roomFacility,
        visit: visit,
        booked: true,
      }

      if (this.roomEvent.length > 0) {
        Object.assign(this.bookingProcess, {
          roomEvents: this.roomEvent
        })
      }
      else {
        Object.assign(this.bookingProcess, {
          roomEvents: []
        })
      }

      this.hotelsToBook.push(this.bookingProcess)
      // console.log(this.hotelsToBook)
      // for(let h1 in hotel.bookingProcess1)
      // {
      //   if(hotel.bookingProcess1[h1].compulsory) {
      //     this.bookingProcess.push(hotel.bookingProcess1[h1])
      //   }
      // }
      // console.log(hotel._id + " + " + roomCategory + " + " + this.roomEvent)
    }
  }


  getHotelDetails() {




    this.hotelRequirements = JSON.parse(localStorage.getItem("traveller-quotation"))
    // console.log(this.hotelRequirements)
    if (this.hotelRequirements.paxType == "group") {
      this.groupDetail = true
      this.hotelDetail = false
      this.hideHotelList = false
    }
    else {
      this.groupDetail = false
      this.hotelDetail = true
      this.hideHotelList = false
    }
    // console.log(this.groupDetail , this.hotelDetail)
    let requirement = {
      data: this.hotelRequirements.visits
    }
    // console.log(requirement)

    if (this.hotelRequirements.paxType == "mice") {
      this.miceDetail = true
      this.hotelDetail = false
      this.hideHotelList = false
    }
    else {
      this.miceDetail = false
      this.hotelDetail = true
      this.hideHotelList = false
    }
    // console.log(this.miceDetail , this.hotelDetail)
    let requirements = {
      data: this.hotelRequirements.visits
    }
    // console.log(requirements)
    let k = 0;
    for (let visit in this.hotelRequirements.visits) {
      // console.log(this.hotelRequirements.visits[visit])
      this._apiService.getHotelDetails(JSON.stringify({
        city: this.hotelRequirements.visits[visit].city,
        state: this.hotelRequirements.visits[visit].state, country: this.hotelRequirements.visits[visit].country,
        arrDate: this.hotelRequirements.visits[visit].arrDate, depDate: this.hotelRequirements.visits[visit].depDate
      })).then(d => {
        // console.log(d)
        this.hotelJson = d
        if (this.hotelJson.status == true) {
          this.hotelDetails.push(this.hotelJson.hotels)
          Object.assign(this.hotelRequirements.visits[visit], { hotels: this.hotelJson.hotels })
          for (let j in this.hotelJson.hotels) {
            this.roomCategory[k] = "Deluxe"
            this.inRoomFac[k] = "Deluxe"
            k++;
          }

        }
        // console.log(this.hotelDetails)
        this._apiService.getSiteSeeing(JSON.stringify({
          city: this.hotelRequirements.visits[visit].city,
          state: this.hotelRequirements.visits[visit].state, country: this.hotelRequirements.visits[visit].country,
          arrDate: this.hotelRequirements.visits[visit].arrDate, depDate: this.hotelRequirements.visits[visit].depDate
        })).then(d => {
          // console.log(d)
          this.siteJson = d
          if (this.siteJson.status == true) {
            this.siteSeeingDetails.push(this.siteJson.site)
            Object.assign(this.hotelRequirements.visits[visit], { sites: this.siteJson.site })
          }
        })

      })


      this._apiService.getfoodDetails(JSON.stringify({
        city: this.hotelRequirements.visits[visit].city,
        state: this.hotelRequirements.visits[visit].state, country: this.hotelRequirements.visits[visit].country,
        arrDate: this.hotelRequirements.visits[visit].arrDate, depDate: this.hotelRequirements.visits[visit].depDate
      })).then(d1 => {
        console.log(d1)
        this.foodJson = d1
        if (this.foodJson.status == true) {
          this.foodDetails.push(this.foodJson.food)
          Object.assign(this.hotelRequirements.visits[visit], { foods: this.foodJson.food })
        }
      })



    }
    console.log(this.siteSeeing)
    console.log(this.hotelRequirements)
    console.log(this.foodJson)
  }

  // getShowEvents(check, event, k) {
  //   if (check.checked) {
  //     this.showEvent[k].push(event)
  //   }
  //   else {
  //     this.showEvent[k].splice(this.showEvent.indexOf(event), 1)
  //   }

  //   // console.log("works")

  // }

  pickShow(pickedShow, site) { }

  sessionChanges(sess, event) {

    if (event) {
      if (sess == 'morning') {
        this.session['fulldayChecked'] = false
        this.session['afternoonChecked'] = true
        this.session['eveningChecked'] = true
        this.session['nightChecked'] = true

        console.log(this.session.morning)

      }
    }
    else {
      this.session['fulldayChecked'] = false
      this.session['afternoonChecked'] = false
      this.session['eveningChecked'] = false
      this.session['nightChecked'] = false
      console.log(this.session.morning)
    }
    if (event) {
      if (sess == 'afternoon') {
        this.session['fulldayChecked'] = true
        this.session['morningChecked'] = true
        this.session['eveningChecked'] = true
        this.session['nightChecked'] = true

      }
    }
    else {
      this.session['fulldayChecked'] = false
      this.session['afternoonChecked'] = false
      this.session['eveningChecked'] = false
      this.session['nightChecked'] = false
      this.session['morningChecked'] = false
    }
    if (event) {
      if (sess == 'evening') {
        this.session['fulldayChecked'] = true
        this.session['morningChecked'] = true
        this.session['afternoonChecked'] = true
        this.session['nightChecked'] = true

      }
    }
    else {
      this.session['fulldayChecked'] = false
      this.session['afternoonChecked'] = false
      this.session['eveningChecked'] = false
      this.session['nightChecked'] = false
      this.session['morningChecked'] = false
    }
    if (event) {
      if (sess == 'night') {
        this.session['fulldayChecked'] = true
        this.session['afternoonChecked'] = true
        this.session['eveningChecked'] = true
        this.session['morningChecked'] = true

      }
    }
    else {
      this.session['fulldayChecked'] = false
      this.session['morningChecked'] = false
      this.session['afternoonChecked'] = false
      this.session['eveningChecked'] = false
      this.session['nightChecked'] = false
    }

  }

  getSelectedSessions(selectedSession) {


  }
  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.fruits.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.fruitCtrl.setValue(null);
    }
  }

  removeFruit(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }


}


