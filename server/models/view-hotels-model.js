var mongoose = require('mongoose')

var viewHotelSchema = new mongoose.Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    hotelCategory: {
        type: String
    },
    location: {
        type: String
    },
    landmark: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String
    },
    address: {
        type: String
    },
    pincode: {
        type: Date
    },
    salesContactName: {
        type: String
    },
    salesContactNumber: {
        type: String
    },
    salesEmail: {
        type: String
    },
    reservationContactName: {
        type: String
    },
    reservationContactNumber: {
        type: String
    },
    reservationEmail: {
        type: String
    },
    status: {
        type: String
    },
    hotlePaymentCategory: {
        type: String
    },
    website: {
        type: String
    },
    faxNumber: {
        type: String
    },
    cutOffDate: {
        type: Date
    },
    menuDetails: {
        type: Array
    },
    roomsAvailableDetailsVector: [{
        roomConfigurations: {
            type: String
        },
        totalAvailableRoomsCount: {
            type: Number
        },
        allowedPerGroupCount: {
            type: Number
        },
        notAvailableDates: {
            type: Array
        },
        allotmentCount: {
            type: Number
        },
        allotmentValidInDays: {
            type: Number
        },
        extraBedCount: {
            type: Number
        },
        childNoBedCount: {
            type: Number
        },
        maxPersonsAllowed: {
            type: Number
        },
        currentAvailableCount: {
            type: Number
        }
    }],
    policyDetails: [{
        policyType: {
            type: String
        },
        displayText: {
            type: String
        },
        rule: {
            type: Number
        },
        policySpecifierType: {
            type: String
        },
        charges: {
            type: Number
        },
        policyChargesSpecifierType: {
            type: String
        },
        validityStartDate: {
            type: Date
        },
        validityEndDate: {
            type: Date
        },
        name: {
            type: String
        }
    }],
    meetingRoomDetails: [{
        meetingRoomStyle: {
            type: String
        },
        capacity: {
            type: Number
        }
    }],
    facilitiesAvailableVector: {
        type: Array
    },
    roomConfigurationsVector: {
        type: Array
    },
    viewDetails: {
        type: Array
    },
    hotelTariff: {
        fitandGroupHotelTariffVector: [{
            roomCategory: {
                type: String
            },
            roomType: {
                type: String
            },
            viewDetails: {
                type: String
            },
            fitPrice: {
                type: Number
            },
            groupPrice: {
                type: Number
            },
            extraBedType: {
                type: String
            },
            extraBedAdultPrice: {
                type: Number
            },
            extraBedChildPrice: {
                type: Number
            },
            validityStartDate: {
                type: Date
            },
            validityEndDate: {
                type: Date
            }
        }],
        micehotelTariff: [{
            sessionType: {
                type: String
            },
            noOfBreaks: {
                type: Number
            },
            mealsType: {
                type: String
            },
            price: {
                type: Number
            },
            supplementary: {
                type: String
            },
            supplementaryCharges: {
                type: Number
            },
            validityStartDate: {
                type: Date
            },
            validityEndDate: {
                type: Date
            },
            micetype: {
                type: String
            }
        }]
    },
    seasonDetails: [{
        type: {
            type: String
        },
        name: {
            type: String
        },
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        },
        supplementCharges: {
            type: Number
        },
        minimumNightRestrictions: {
            type: Number
        },
        adultPrice: {
            type: Number
        },
        childPrice: {
            type: Number
        },
        displayText: {
            type: String
        },
        compulsory: {
            type: Boolean
        }
    }],
    mealsTariff: [{
        adultPrice: {
            type: Number
        },
        childPrice: {
            type: Number
        },
        compulsory: {
            type: Boolean
        },
        mealsType: {
            type: String
        },
        validityEndDate: {
            type: Date
        },
        validityStartDate: {
            type: Date
        }
    }],
    promotionsAndOffers: [{
        name: {
            type: String
        },
        payFor: {
            type: Number
        },
        getTo: {
            type: String
        },
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        },
        displayText: {
            type: String
        }
    }],
    inRoomFacilitiesVector: [{
        inRoomFacilitiesVector: {
            type: Array
        },
        roomCategory: {
            type: String,
        }
    }]
})

var viewHotel = module.exports = mongoose.model('hotel-details', viewHotelSchema)

module.exports.get = function (callback, limit) {
    viewHotel.find(callback).limit(limit)
}