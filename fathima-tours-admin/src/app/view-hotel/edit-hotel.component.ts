import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';




@Component({
    selector: 'app-edit-hotel',
    templateUrl: './edit-hotel.html',
    styleUrls: ['./view-hotel.component.scss']
})
export class EditHotelComponent implements OnInit {


    displayHotelData: any
    get_id: any

    hotelDetails: FormGroup

    //html static variable
    hoteltype: any = ['Lodging', 'Boarding', 'Restuart'];
    hotelcatogery: any = ['Normal', 'three_star', 'four_star', 'five_star', 'six_star', 'seven_star'];
    status: any = ['None', 'Activated', 'Deactivated', 'Suspended', 'Withheld', 'Registered', 'Activation Pending'];
    payment: any = ['None', 'Advance Payment', 'Cash on Arrival', 'Credit'];
    cities: any = ['Salem', 'Hyderabad', 'Mumbai', 'New Delhi', 'Chennai', 'cochin'];
    states: any = ['Tamil nadu', 'Andhra pradesh', 'Maharastra', 'Kerala', 'Telangana'];
    countries: any = ['India', 'US', 'Europe'];
    configuration: any = ['Double', 'Triple', 'Twin', 'One Bedroom Suite', 'Two Bedroom Suite', 'Three Bedroom Suite', 'Four Bedroom Suite', 'Quad Rooms'];
    tcount: any = ['0', '1', '2', '3', '4', '5', '6'];
    gcount: any = ['0', '1', '2', '3', '4', '5', '6'];
    allotc: any = ['0', '1', '2', '3', '4', '5', '6'];
    allotv: any = ['0', '1', '2', '3', '4', '5', '6'];
    exbcount: any = ['0', '1', '2', '3', '4', '5', '6'];
    cnb: any = ['0', '1', '2', '3', '4', '5', '6'];
    maxp: any = ['0', '1', '2', '3', '4', '5', '6'];
    faci: any = ['Wi-fi', 'Parking', 'Bar', 'Car hire', 'Fitness center', 'Spa'];
    vfaci: any = ['None', 'Sea view', 'Garden View', 'City View', 'Pool view'];
    irfaci: any = ['Theatre', 'Class Room', 'Half-moon', 'Round Table', 'U-shape', 'Ballrooms'];
    mrfaci: any = ['Theatre', 'Class Room', 'Half-moon', 'Round Table', 'U-shape', 'Ballrooms'];
    capacity: any = ['0', '1', '2', '3', '4', '5', '6'];
    roomc: any = ['Standard', 'Deluxe', 'Superior', 'Studio Room', 'Executive Studio', 'Grand Deluxe', 'Pool Access', 'Pool vila'];
    roomt: any = ['Single', 'SingleTwin', 'Double', 'DoubleTwin'];
    vdetails: any = ['None', 'Sea view', 'Garden View', 'City View', 'Pool view', 'Garden View'];
    exbtype: any = ['None', 'RollWay Bed', 'Sofa Bed', 'Normal Bed'];
    fitprice: any = ['0.0', '1.0', '2.0', '3.0', '4.0', '5.0', '6.0'];
    gprice: any = ['0.0', '1.0', '2.0', '3.0', '4.0', '5.0', '6.0'];
    ebaprice: any = ['0.0', '1.0', '2.0', '3.0', '4.0', '5.0', '6.0'];
    ebcprice: any = ['0.0', '1.0', '2.0', '3.0', '4.0', '5.0', '6.0'];
    ttype: any = ['None', 'Half Day', 'Full Day', 'Gala Dinner'];
    sessions: any = ['None', 'First Half', 'Second Half', '2 Hours', '3 Hours', '4 Hours'];
    breaks: any = ['None', 'First Half', 'Second Half', '2 Hours', '3 Hours', '4 Hours'];
    meals: any = ['None', 'Breakfast', 'Lunch', 'Dinner'];
    pprice: any = ['0.0', '1.0', '2.0', '3.0', '4.0', '5.0', '6.0'];
    supplementary: any = ['none', 'Soft Drinks'];
    scharge: any = ['0.0', '1.0', '2.0', '3.0', '4.0', '5.0', '6.0'];
    ptype: any = ['Informative', 'Applicable', 'Both'];
    hdna: any = ['0', '1', '2', '3', '4', '5', '6'];
    rulespecify: any = ['None', 'Hours', 'Days', 'Nights'];
    charge: any = ['0.0', '1.0', '2.0', '3.0', '4.0', '5.0', '6.0'];
    chspecify: any = ['Percentage', 'Currency'];
    paynight: any = ['0.0', '1.0', '2.0', '3.0', '4.0', '5.0', '6.0'];
    stay: any = ['0.0', '1.0', '2.0', '3.0', '4.0', '5.0', '6.0'];
    Setype: any = ['Event', 'Current Deal', 'Sesonal Rates', 'Peak Season Rates', 'Compulsory Gala Dinner'];
    aprice: any = ['0.0', '1.0', '2.0', '3.0', '4.0', '5.0', '6.0'];
    cprice: any = ['0.0', '1.0', '2.0', '3.0', '4.0', '5.0', '6.0'];
    suppleCharges: any = ['0.0', '1.0', '2.0', '3.0', '4.0', '5.0', '6.0'];
    Restrictions: any = ['0.0', '1.0', '2.0', '3.0', '4.0', '5.0', '6.0'];
    adprice: any = ['0.0', '1.0', '2.0', '3.0', '4.0', '5.0', '6.0'];
    chprice: any = ['0.0', '1.0', '2.0', '3.0', '4.0', '5.0', '6.0'];



    constructor(public apiService: ApiService, private router: Router, public formBuilder: FormBuilder) {
        this.get_id = localStorage.getItem('passing_id');
        console.log(this.get_id)
        this.getHotelDetails()

        this.hotelDetails = this.formBuilder.group({

            name: [''],
            hotel_Type: [''],
            hotel_Catogery: [''],
            status: [''],
            payment_Catogery: [''],
            address: [''],
            location: [''],
            landmark: [''],
            city: [''],
            State: [''],
            Country: [''],
            pincode: [''],
            salesContact: [''],
            salesContactNum: [''],
            sales_Email: [''],
            reservationContact: [''],
            reservationContactNum: [''],
            reservation_Email: [''],
            websites: [''],
            faxnumber: [''],
            room_availability_details: this.formBuilder.array([]),
            hotel_facilitys: this.formBuilder.array([]),
            view_facilitys: this.formBuilder.array([]),
            in_room_facilitys: this.formBuilder.array([]),
            meeting_room_details: this.formBuilder.array([]),
            tarif_details_FIT: this.formBuilder.array([]),
            tarif_details_MICE: this.formBuilder.array([]),
            policy_details: this.formBuilder.array([]),
            promotion_and_offers: this.formBuilder.array([]),
            event_and_season_details: this.formBuilder.array([]),
            meals_details: this.formBuilder.array([]),
        })
        let control = <FormArray>this.hotelDetails.controls['hotel_facilitys'];
        control.push(this.initCountry());

        let control1 = <FormArray>this.hotelDetails.controls['room_availability_details'];
        control1.push(this.availability());

        let control2 = <FormArray>this.hotelDetails.controls['view_facilitys'];
        control2.push(this.vAvailability());

        let control3 = <FormArray>this.hotelDetails.controls['in_room_facilitys'];
        control3.push(this.inRoomAvailable());

        let control4 = <FormArray>this.hotelDetails.controls['meeting_room_details'];
        control4.push(this.meetRoomAvailable());

        let control5 = <FormArray>this.hotelDetails.controls['tarif_details_FIT'];
        control5.push(this.tariffDetails());

        let control6 = <FormArray>this.hotelDetails.controls['tarif_details_MICE'];
        control6.push(this.tariffDetails1());

        let control7 = <FormArray>this.hotelDetails.controls['policy_details'];
        control7.push(this.policyDetails());

        let control8 = <FormArray>this.hotelDetails.controls['promotion_and_offers'];
        control8.push(this.promotion());

        let control9 = <FormArray>this.hotelDetails.controls['event_and_season_details'];
        control9.push(this.season());

        let control10 = <FormArray>this.hotelDetails.controls['meals_details'];
        control10.push(this.mealss());

    }
    initCountry() {
        return this.formBuilder.group({
            facilities: ['']
        });
    }
    addCountry() {
        let control = <FormArray>this.hotelDetails.controls['hotel_facilitys'];
        control.push(this.initCountry());
    }

    remove(event) {
        console.log(event)
        let control = <FormArray>this.hotelDetails.controls['hotel_facilitys']
        control.removeAt(event)

    }

    availability() {
        return this.formBuilder.group({
            configuration: [''],
            totalCount: [''],
            perGroupCount: [''],
            allotmentCount: [''],
            allotmentValidDays: [''],
            extraBedCount: [''],
            cnbCount: [''],
            maxPersonAllowed: [''],
            not_available_dates: ['']
        });
    }

    addCountry1() {
        let control1 = <FormArray>this.hotelDetails.controls['room_availability_details'];
        control1.push(this.availability());
    }
    remove1(event) {
        console.log(event)
        let control1 = <FormArray>this.hotelDetails.controls['room_availability_details']
        control1.removeAt(event)

    }

    vAvailability() {
        return this.formBuilder.group({
            viewFacilities: [''],
        });
    }

    addCountry2() {
        let control2 = <FormArray>this.hotelDetails.controls['view_facilitys'];
        control2.push(this.vAvailability());
    }
    remove2(event) {
        console.log(event)
        let control2 = <FormArray>this.hotelDetails.controls['view_facilitys']
        control2.removeAt(event)

    }

    inRoomAvailable() {
        return this.formBuilder.group({
            inRoomFacilities: [''],
            selection: [''],
        });
    }

    addCountry3() {
        let control3 = <FormArray>this.hotelDetails.controls['in_room_facilitys'];
        control3.push(this.inRoomAvailable());
    }
    remove3(event) {
        console.log(event)
        let control3 = <FormArray>this.hotelDetails.controls['in_room_facilitys']
        control3.removeAt(event)

    }

    meetRoomAvailable() {
        return this.formBuilder.group({
            meetingRoomFacilities: [''],
            capacity: [''],
        });
    }

    addCountry4() {
        let control4 = <FormArray>this.hotelDetails.controls['meeting_room_details'];
        control4.push(this.meetRoomAvailable());
    }
    remove4(event) {
        console.log(event)
        let control4 = <FormArray>this.hotelDetails.controls['meeting_room_details']
        control4.removeAt(event)

    }

    tariffDetails() {
        return this.formBuilder.group({
            room_Catogery: [''],
            roomType: [''],
            viewDetails: [''],
            extraBedType: [''],
            fitPrice: [''],
            groupPrice: [''],
            extraBedAdultPrice: [''],
            extraBedChildPrice: [''],
            arrDate: [''],
            depDate: [''],
        });
    }

    addCountry5() {
        let control5 = <FormArray>this.hotelDetails.controls['tarif_details_FIT'];
        control5.push(this.tariffDetails());
    }
    remove5(event) {
        console.log(event)
        let control5 = <FormArray>this.hotelDetails.controls['tarif_details_FIT']
        control5.removeAt(event)

    }

    tariffDetails1() {
        return this.formBuilder.group({
            type: [''],
            sessions: [''],
            noOfBreaks: [''],
            meals: [''],
            price: [''],
            arr1Date: [''],
            dep1Date: [''],
            supplementary: [''],
            supplementaryCharges: [''],
        });
    }

    addCountry6() {
        let control6 = <FormArray>this.hotelDetails.controls['tarif_details_MICE'];
        control6.push(this.tariffDetails1());
    }
    remove6(event) {
        console.log(event)
        let control6 = <FormArray>this.hotelDetails.controls['tarif_details_MICE']
        control6.removeAt(event)

    }

    policyDetails() {
        return this.formBuilder.group({
            policy_Type: [''],
            policy_Name: [''],
            day_Nights: [''],
            rule_Specifier: [''],
            charges: [''],
            chargesSpecifier: [''],
            arr2Date: [''],
            dep2Date: [''],
            display_Text: [''],
        });
    }

    addCountry7() {
        let control7 = <FormArray>this.hotelDetails.controls['policy_details'];
        control7.push(this.policyDetails());
    }
    remove7(event) {
        console.log(event)
        let control7 = <FormArray>this.hotelDetails.controls['policy_details']
        control7.removeAt(event)

    }

    promotion() {
        return this.formBuilder.group({
            name1: [''],
            payForNight: [''],
            get_Stay: [''],
            arr3Date: [''],
            dep3Date: [''],
            display: [''],
        });
    }

    addCountry8() {
        let control8 = <FormArray>this.hotelDetails.controls['promotion_and_offers'];
        control8.push(this.promotion());
    }
    remove8(event) {
        console.log(event)
        let control8 = <FormArray>this.hotelDetails.controls['promotion_and_offers']
        control8.removeAt(event)

    }
    season() {
        return this.formBuilder.group({
            season_Type: [''],
            season_Name: [''],
            adult_Price: [''],
            child_Price: [''],
            arr4Date: [''],
            dep4Date: [''],
            supplement_Charges: [''],
            min_Restrictions: [''],
            display_Txt: [''],
            is_complusary: [false]
        });
    }

    addCountry9() {
        let control9 = <FormArray>this.hotelDetails.controls['event_and_season_details'];
        control9.push(this.season());
    }
    remove9(event) {
        console.log(event)
        let control9 = <FormArray>this.hotelDetails.controls['event_and_season_details']
        control9.removeAt(event)

    }

    mealss() {
        return this.formBuilder.group({
            meals_Type: [''],
            adult1_Price: [''],
            child1_Price: [''],
            arr5Date: [''],
            dep5Date: [''],
            is_complusary: [false]
        });
    }

    addCountry10() {
        let control10 = <FormArray>this.hotelDetails.controls['meals_details'];
        control10.push(this.mealss());
    }
    remove10(event) {
        console.log(event)
        let control10 = <FormArray>this.hotelDetails.controls['meals_details']
        control10.removeAt(event)

    }
    ngOnInit() {
    }



    getHotelDetails() {
        this.apiService.GetAllData('/view-update-hotel/' + this.get_id).then(displayHotelData => {
            console.log(displayHotelData)
            this.displayHotelData = displayHotelData
            this.hotelDetails.get('name').setValue(this.displayHotelData.name)
            this.hotelDetails.get('hotel_Type').setValue(this.displayHotelData.hotel_Type)
            this.hotelDetails.get('hotel_Catogery').setValue(this.displayHotelData.hotel_Catogery)
            this.hotelDetails.get('status').setValue(this.displayHotelData.status)
            this.hotelDetails.get('payment_Catogery').setValue(this.displayHotelData.payment_Catogery)
            this.hotelDetails.get('address').setValue(this.displayHotelData.address)
            this.hotelDetails.get('location').setValue(this.displayHotelData.location)
            this.hotelDetails.get('landmark').setValue(this.displayHotelData.landmark)
            this.hotelDetails.get('city').setValue(this.displayHotelData.city)
            this.hotelDetails.get('State').setValue(this.displayHotelData.State)
            this.hotelDetails.get('Country').setValue(this.displayHotelData.Country)
            this.hotelDetails.get('pincode').setValue(this.displayHotelData.pincode)
            this.hotelDetails.get('salesContact').setValue(this.displayHotelData.salesContact)
            this.hotelDetails.get('salesContactNum').setValue(this.displayHotelData.salesContactNum)
            this.hotelDetails.get('sales_Email').setValue(this.displayHotelData.sales_Email)
            this.hotelDetails.get('reservationContact').setValue(this.displayHotelData.reservationContact)
            this.hotelDetails.get('reservationContactNum').setValue(this.displayHotelData.reservationContactNum)
            this.hotelDetails.get('reservation_Email').setValue(this.displayHotelData.reservation_Email)
            this.hotelDetails.get('websites').setValue(this.displayHotelData.websites)
            this.hotelDetails.get('faxnumber').setValue(this.displayHotelData.faxnumber)


            // let control = <FormArray>this.hotelDetails.controls['hotel_facilitys'];
            for (let i in this.displayHotelData.hotel_facilitys) {
                delete this.displayHotelData.hotel_facilitys[i]["_id"]
                delete this.displayHotelData.hotel_facilitys[i]["__v"]

                if (Number(i) != this.displayHotelData.hotel_facilitys.length - 1)
                    this.addCountry()
            }
            this.hotelDetails.get("hotel_facilitys").setValue(this.displayHotelData.hotel_facilitys)

            for (let i in this.displayHotelData.room_availability_details) {
                delete this.displayHotelData.room_availability_details[i]["_id"]
                delete this.displayHotelData.room_availability_details[i]["__v"]

                if (Number(i) != this.displayHotelData.room_availability_details.length - 1)
                    this.addCountry1()

            }
            this.hotelDetails.get("room_availability_details").setValue(this.displayHotelData.room_availability_details)


            for (let i in this.displayHotelData.view_facilitys) {
                delete this.displayHotelData.view_facilitys[i]["_id"]
                delete this.displayHotelData.view_facilitys[i]["__v"]

                if (Number(i) != this.displayHotelData.view_facilitys.length - 1)
                    this.addCountry2()

            }
            this.hotelDetails.get("view_facilitys").setValue(this.displayHotelData.view_facilitys)

            for (let i in this.displayHotelData.in_room_facilitys) {
                delete this.displayHotelData.in_room_facilitys[i]["_id"]
                delete this.displayHotelData.in_room_facilitys[i]["__v"]

                if (Number(i) != this.displayHotelData.in_room_facilitys.length - 1)
                    this.addCountry3()
            }
            this.hotelDetails.get("in_room_facilitys").setValue(this.displayHotelData.in_room_facilitys)

            for (let i in this.displayHotelData.meeting_room_details) {
                delete this.displayHotelData.meeting_room_details[i]["_id"]
                delete this.displayHotelData.meeting_room_details[i]["__v"]

                if (Number(i) != this.displayHotelData.meeting_room_details.length - 1)
                    this.addCountry4()
            }
            this.hotelDetails.get("meeting_room_details").setValue(this.displayHotelData.meeting_room_details)



            for (let i in this.displayHotelData.tarif_details_FIT) {
                delete this.displayHotelData.tarif_details_FIT[i]["_id"]
                delete this.displayHotelData.tarif_details_FIT[i]["__v"]

                if (Number(i) != this.displayHotelData.tarif_details_FIT.length - 1)
                    this.addCountry5()
            }
            this.hotelDetails.get("tarif_details_FIT").setValue(this.displayHotelData.tarif_details_FIT)

            for (let i in this.displayHotelData.tarif_details_MICE) {
                delete this.displayHotelData.tarif_details_MICE[i]["_id"]
                delete this.displayHotelData.tarif_details_MICE[i]["__v"]

                if (Number(i) != this.displayHotelData.tarif_details_MICE.length - 1)
                    this.addCountry6()
            }
            this.hotelDetails.get("tarif_details_MICE").setValue(this.displayHotelData.tarif_details_MICE)

            for (let i in this.displayHotelData.policy_details) {
                delete this.displayHotelData.policy_details[i]["_id"]
                delete this.displayHotelData.policy_details[i]["__v"]


                if (Number(i) != this.displayHotelData.policy_details.length - 1)
                    this.addCountry7()
            }
            this.hotelDetails.get("policy_details").setValue(this.displayHotelData.policy_details)

            for (let i in this.displayHotelData.promotion_and_offers) {
                delete this.displayHotelData.promotion_and_offers[i]["_id"]
                delete this.displayHotelData.promotion_and_offers[i]["__v"]

                if (Number(i) != this.displayHotelData.promotion_and_offers.length - 1)
                    this.addCountry8()
            }
            this.hotelDetails.get("promotion_and_offers").setValue(this.displayHotelData.promotion_and_offers)

            for (let i in this.displayHotelData.event_and_season_details) {
                delete this.displayHotelData.event_and_season_details[i]["_id"]
                delete this.displayHotelData.event_and_season_details[i]["__v"]

                if (Number(i) != this.displayHotelData.event_and_season_details.length - 1)
                    this.addCountry9()
            }
            this.hotelDetails.get("event_and_season_details").setValue(this.displayHotelData.event_and_season_details)


            for (let i in this.displayHotelData.meals_details) {
                delete this.displayHotelData.meals_details[i]["_id"]
                delete this.displayHotelData.meals_details[i]["__v"]

                if (Number(i) != this.displayHotelData.meals_details.length - 1)
                    this.addCountry10()
            }
            this.hotelDetails.get("meals_details").setValue(this.displayHotelData.meals_details)

        })

    }

    onSubmit(){
        console.log(this.hotelDetails.value)
        this.apiService.updateData('/update-update-hotel/'+this.get_id,this.hotelDetails.value).then(updateDetail => {
            console.log(updateDetail)
            this.router.navigate(['/view-hotel']);
        })
    }

cancelButton(){
    this.router.navigate(['/view-hotel']);
}


}





