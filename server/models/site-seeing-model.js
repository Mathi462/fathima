// var mongoose = require('mongoose') 



// var siteSeeingSchema = mongoose.Schema({
//     name: {
//         type: String,
//         // required: true
//     },
//     paymentOption: {
//         type: String,
//         // required: true
//     },
//     seasonPeriod: {
//         type: String,
//         // required: true
//     },
//     guidePrice: {
//         type: Number,
//         // required: true
//     },
//     displayText: {
//         type: String,
//         // required: true
//     },
//     address: [{
//         address: {
//             type: String,
//             // required: true
//         },
//         location: {
//             type: String,
//             // required: true
//         },
//         landmark: {
//             type: String,
//             // required: true
//         },
//         city: {
//             type: String,
//             // required: true
//         },
//         country: {
//             type: String,
//             // required: true
//         },
//         state : {
//             type: String,
//             // required: true
//         },
//         pincode: {
//             type: Number,
//             // required: true
//         },
//         latitude : {
//             type : Number,
//             // required : true
//         },
//         longitude : {
//             type : Number,
//             // required : true
//         }
//     }],
//     contact:[ {
//         contactNumber: {
//             type: String,
//             // required: true
//         },
//         contactName: {
//             type: String,
//             // required: true
//         },
//         faxNumber: {
//             type: String,
//             // required: true
//         },
//         email: {
//             type: String,
//             // required: true
//         },
//     }],
//     // showTimingDetails: [{
//     //     showName: {
//     //         type: String,
//     // //         required: true
//     //     },
//     //     showTime: {
//     //         type: Date,
//     // //         required: true
//     //     },
//     //     pickUpTime: {
//     //         type: Date,
//     // //         required: true
//     //     },
//     //     dropOffTime: {
//     //         type: Date,
//     // //         required: true
//     //     },
//     // }],

//     showTimingDetails : [{
//         type: mongoose.Schema.ObjectId,
//         ref: 'show-timing'

//     }],

//     tariffDetails: [{
//         seatType: {
//             type: String,
//             // required: true
//         },
//         mealsType: {
//             type: String,
//             // required: true
//         },
//         mealsAdultPrice : {
//             type: Number,
//             // required: true
//         },
//         mealsChildPrice: {
//             type: Number,
//             // required: true
//         },
//         sicAdultPrice: {
//             type: Number,
//             // required: true
//         },
//         sicChildPrice: {
//             type: Number,
//             // required: true
//         },
//         privateAdultPrice: {
//             type: Number,
//             // required: true
//         },
//         privateChildPrice: {
//             type: Number,
//             // required: true
//         }
//     }]
// }, {
//     toJSON: { virtuals: true },



//     toObject: { virtuals: true }
//   });

// var siteSeeing = module.exports = mongoose.model('site-seeing', siteSeeingSchema)

// module.exports.get = function (callback, limit) {
//     siteSeeing.find(callback).limit(limit)
// }
















var mongoose = require('mongoose')

var siteSeeingSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    paymentOption: {
        type: String,
        required: true
    },
    seasonPeriod: {
        type: String,
        required: true
    },
    guidePrice: {
        type: Number,
        required: true
    },
    displayText: {
        type: String,
        required: true
    },
    address: {
        address: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        landmark: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        state : {
            type: String,
            required: true
        },
        pincode: {
            type: Number,
            required: true
        },
        latitude : {
            type : Number,
            required : true
        },
        longitude : {
            type : Number,
            required : true
        }
    },
    contact: {
        contactNumber: {
            type: String,
            required: true
        },
        contactName: {
            type: String,
            required: true
        },
        faxNumber: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },
    showTimingDetails: [{
        showName: {
            type: String,
            required: true
        },
        showTime: {
            type: Date,
            required: true
        },
        pickUpTime: {
            type: Date,
            required: true
        },
        dropOffTime: {
            type: Date,
            required: true
        },
    }],
    tariffDetails: [{
        seatType: {
            type: String,
            required: true
        },
        mealsType: {
            type: String,
            required: true
        },
        mealsAdultPrice : {
            type: Number,
            required: true
        },
        mealsChildPrice: {
            type: Number,
            required: true
        },
        sicAdultPrice: {
            type: Number,
            required: true
        },
        sicChildPrice: {
            type: Number,
            required: true
        },
        privateAdultPrice: {
            type: Number,
            required: true
        },
        privateChildPrice: {
            type: Number,
            required: true
        }
    }]
})

var siteSeeing = module.exports = mongoose.model('site-seeing', siteSeeingSchema)

module.exports.get = function (callback, limit) {
    siteSeeing.find(callback).limit(limit)
}