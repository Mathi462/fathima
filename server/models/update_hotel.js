var mongoose = require('mongoose')

var UpdateHotelSchema = mongoose.Schema({
    name                    :  { type : String},
    hotel_Type              :  { type : String},
    hotel_Catogery          :  { type : String},
    status                  :  { type : String},
    payment_Catogery        :  { type : String},
    address                 :  { type : String},
    location                :  { type : String},
    landmark                :  { type : String},
    city                    :  { type : String},
    State                   :  { type : String},
    Country                 :  { type : String},
    pincode                 :  { type : Number},
    salesContact            :  { type : String},
    salesContactNum         :  { type : String},
    sales_Email             :  { type : String},
    reservationContact      :  { type : String},
    reservationContactNum   :  { type : String},
    reservation_Email       :  { type : String},
    websites                :  { type : String},
    faxnumber               :  { type : String},
    hotel_facilitys:[{
        facilities  : { type : String}
    }],
    room_availability_details:[{

        configuration       : { type : String},
        totalCount          : { type : String},
        perGroupCount       : { type : String},
        allotmentCount      : { type : String},
        allotmentValidDays  : { type : String},
        extraBedCount       : { type : String},
        cnbCount            : { type : String},
        maxPersonAllowed    : { type : String},
        not_available_dates : { type : String}

    }],
    view_facilitys:[{

        viewFacilities : { type : String}

    }],
    in_room_facilitys:[{

        inRoomFacilities : { type : String},
        selection        : { type : String}

    }],
    meeting_room_details:[{

        inRoomFacilities        : { type : String}, 
        selection               : { type : String},
        meetingRoomFacilities   : { type : String},
        capacity                : { type : String},

    }],
    tarif_details_FIT:[{

        room_Catogery           : { type : String}, 
        roomType                : { type : String}, 
        viewDetails             : { type : String}, 
        extraBedType            : { type : String}, 
        fitPrice                : { type : String}, 
        groupPrice              : { type : String}, 
        extraBedAdultPrice      : { type : String}, 
        extraBedChildPrice      : { type : String}, 
        arrDate                 : { type : Date  }, 
        depDate                 : { type : Date  }, 

    }],
    tarif_details_MICE:[{

        type                    : { type : String}, 
        sessions                : { type : String}, 
        noOfBreaks              : { type : String}, 
        meals                   : { type : String}, 
        price                   : { type : String}, 
        arr1Date                : { type : Date  }, 
        dep1Date                : { type : Date  }, 
        supplementary           : { type : String}, 
        supplementaryCharges    : { type : String}, 

    }],
    policy_details:[{
        policy_Type        : { type : String}, 
        policy_Name        : { type : String}, 
        day_Nights         : { type : String}, 
        rule_Specifier     : { type : String}, 
        charges            : { type : String}, 
        chargesSpecifier   : { type : String}, 
        arr2Date           : { type : Date  }, 
        dep2Date           : { type : Date  }, 
        display_Text       : { type : String}, 

    }],
    promotion_and_offers:[{

        name1           : { type : String}, 
        payForNight     : { type : String}, 
        get_Stay        : { type : String}, 
        arr3Date        : { type : Date  }, 
        dep3Date        : { type : Date  }, 
        display         : { type : String}, 

    }],
    event_and_season_details:[{

        season_Type         : { type : String}, 
        season_Name         : { type : String}, 
        adult_Price         : { type : String}, 
        child_Price         : { type : String}, 
        arr4Date            : { type : Date  }, 
        dep4Date            : { type : Date  }, 
        supplement_Charges  : { type : String}, 
        min_Restrictions    : { type : String}, 
        display_Txt         : { type : String}, 
        is_complusary       : { type : Boolean}

    }],
    meals_details:[{

        meals_Type      : { type : String}, 
        adult1_Price    : { type : String}, 
        child1_Price    : { type : String}, 
        arr5Date        : { type : Date  }, 
        dep5Date        : { type : Date  },
        is_complusary   : { type : Boolean}

    }],
    
})

var updatehotel = module.exports = mongoose.model('update-hotel', UpdateHotelSchema)

module.exports.get = function (callback , limit) {
    updatehotel.find(callback).limit(limit)
}