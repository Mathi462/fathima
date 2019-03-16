viewHotelModel = require('../models/view-hotels-model')

var async = require("async");
exports.getAll = function (req, res, _next) {
    let data = req.params.data
    // data = JSON.parse(data)
    var info =("http://ec2-34-220-166-216.us-west-2.compute.amazonaws.com:8080/fathimatours/data/hotels");
    console.log(info);
    let rsp = []
    persons = 0;
    persons = Number(data.noOfAdults) + Number(persons)
    persons = Number(persons) + Number(data.noOfChildrens)


    viewHotelModel.find({ city: data.city }
    ).then(d => {

        Promise.all(d.filter((filter) => {
            filter.roomsAvailableDetailsVector.filter((max, index) => {
                if (max.maxPersonsAllowed > !persons && max.maxPersonsAllowed < !persons + 1) {
                    filter.roomsAvailableDetailsVector.splice(index, 1)
                    // console.log(persons, max.maxPersonsAllowed)
                }
                max.notAvailableDates.filter((notAvailDts, idx) => {
                    
                    if (new Date(data.arrDate) <= new Date(notAvailDts) && new Date(data.depDate) >= new Date(notAvailDts)) {
                        console.log(notAvailDts)
                        //  console.log("-----------------------------------------------------------------------------")
                        //  console.log(index,filter.city+" ArrDate : "+ new Date(data.arrDate) + " Not Avail Dates : " + new Date(notAvailDts))
                        //  console.log(index,filter.city+" DepDate : "+ new Date(data.depDate) + " Not Avail Dates : " + new Date(notAvailDts))
                        //  console.log("-----------------------------------------------------------------------------")
                        //  console.log(111111111111111111111111 , data.city +" REMOVED :" +notAvailDts )
                        filter.roomsAvailableDetailsVector.splice(index, 1)
                    }
                    else {
                        //  console.log("*****************************************************************************")
                        //  console.log(index,filter.city+" ArrDate : "+ new Date(data.arrDate) + " Not Avail Dates : " + new Date(notAvailDts))
                        //  console.log(index,filter.city+" DepDate : "+ new Date(data.depDate) + " Not Avail Dates : " + new Date(notAvailDts))
                        //  console.log("*****************************************************************************")
                    }
                })
                filter.seasonDetails.filter((season, index) => {

                    if (new Date(data.arrDate) > new Date(season.startDate) && new Date(data.depDate) < new Date(season.endDate)) {
                        // console.log("-----------------------------------------------------------------------------")
                        // console.log(index,filter.city+" ArrDate : "+ new Date(data.arrDate) + " EventStartDate : " + new Date(season.startDate))
                        // console.log(index,filter.city+" DepDate : "+ new Date(data.depDate) + " EventEndDate : " + new Date(season.endDate))
                        // console.log("-----------------------------------------------------------------------------")
                    }
                    else {
                        // console.log("*****************************************************************************")
                        // console.log(index,filter.city+" ArrDate : "+ new Date(data.arrDate) + " EventStartDate : " + new Date(season.startDate))
                        // console.log(index,filter.city+" DepDate : "+ new Date(data.depDate) + " EventEndDate : " + new Date(season.endDate))
                        // console.log("*****************************************************************************")
                        filter.seasonDetails.splice(index, 1)
                    }
                    

                })
           


            })


        }))

        res.send({
            status: true,
            hotels: d
        })
        // console.log(d)
    }).catch(err => {
        res.send({
            status: false,
            error: err
        })
    })
    // Promise.all(datas.map(data => {
    //     persons = 0;
    //     persons = Number(data.noOfAdults) + Number(persons)
    //     persons = Number(persons) + Number(data.noOfChildrens)

    //     console.log(persons)
    // viewHotelModel.aggregate([{
    //     $unwind: '$roomsAvailableDetailsVector',
    // },
    // {
    //     $match: {
    //         'city': data.city,
    //         'roomsAvailableDetailsVector.maxPersonsAllowed': {
    //             $gte: persons
    //         },
    //     },
    // },
    // {
    //     $project: {
    //         _id: 1,
    //         name: 1,
    //         roomsAvailableDetailsVector: 1,
    //         city: 1,
    //         promotionsAndOffers: 1,
    //         hotelTariff: 1,     
    //     }
    // }]
    // ).then(d => {
    //     console.log(d)
    //     res.send({
    //         status: true,
    //         hotels: d
    //     })
    // }).catch(err => {
    //     // convert error to null result in resolved array
    //     return null;
    // });

    // Promise.all(datas.map(data => {
    //     persons = 0;
    //     persons = Number(data.noOfAdults) + Number(persons)
    //     persons = Number(persons) + Number(data.noOfChildrens)

    //     console.log(persons)
    //     return viewHotelModel.findOne(
    //         {
    //             city: data.city


    //         }
    //     ).exec().catch(err => {
    //         // convert error to null result in resolved array
    //         return null;
    //     });
    // })).then(fDatas => {
    //     fDatas = fDatas.filter(data => data !== null
    //     );
    //     res.send({
    //         status: true,
    //         hotels: fDatas
    //     });
    // }).catch(err => {
    //     // handle error here
    // });

};
var getDaysCount = function (startDate, endDate) {

    let addFn = Date.prototype.addDays;
    let interval = 1;

    var retVal = [];
    var current = new Date(startDate);

    while (current <= endDate) {
        retVal.push(new Date(current));
        current = addFn.call(current, interval);
    }

    return retVal;

}

exports.new = function (req, res, next) {
    let hotelModel = new viewHotelModel({
        name: req.body.name,
        type: req.body.type,
        hotelCategory: req.body.hotelCategory,
        location: req.body.location,
        landmark: req.body.landmark,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        address: req.body.address,
        pincode: req.body.pincode,
        salesContactName: req.body.salesContactName,
        salesContactNumber: req.body.salesContactNumber,
        salesEmail: req.body.salesEmail,
        reservationContactName: req.body.reservationContactName,
        reservationContactNumber: req.body.reservationContactNumber,
        reservationEmail: req.body.reservationEmail,
        status: req.body.status,
        hotlePaymentCategory: req.body.hotlePaymentCategory,
        website: req.body.website,
        faxNumber: req.body.faxNumber,
        cutOffDate: req.body.cutOffDate,
        menuDetails: req.body.menuDetails,
        roomsAvailableDetailsVector: req.body.roomsAvailableDetailsVector,
        policyDetails: req.body.policyDetails,
        meetingRoomDetails: req.body.meetingRoomDetails,
        facilitiesAvailableVector: req.body.facilitiesAvailableVector,
        roomConfigurationsVector: req.body.roomConfigurationsVector,
        viewDetails: req.body.viewDetails,
        hotelTariff: req.body.hotelTariff,
        seasonDetails: req.body.seasonDetails,
        mealsTariff: req.body.mealsTariff,
        promotionsAndOffers: req.body.promotionsAndOffers,
        inRoomFacilitiesVector: req.body.inRoomFacilitiesVector
    })

    hotelModel.save(function (err) {
        if (err) {
            res.send({
                status: "error",
                message: err,
            });
        }
        res.send({
            status: true,
            message: "Create Package inserted successfully",
            data: hotelModel
        });
    });


}

 // Promise.all(datas.map(data => {
    //     persons = 0;
    //     persons = Number(data.noOfAdults) + Number(persons)
    //     persons = Number(persons) + Number(data.noOfChildrens)

    //     console.log(persons)
//     return viewHotelModel.aggregate([{
//         $unwind: '$roomsAvailableDetailsVector',
//     },
//     {
//         $unwind: '$promotionsAndOffers'
//     },
//     {
//         $unwind: '$hotelTariff'
//     },
//     {
//         $match: {
//             'city': data.city,
//             'roomsAvailableDetailsVector.maxPersonsAllowed': {
//                 $gte: persons
//             },
//             '': { $ne: data.arrDate },
//             'hotelTariff.fitandGroupHotelTariffVector.roomCategory' : {

//             }
//         },
//     },
//     {
//         $project: {
//             _id: 1,
//             roomsAvailableDetailsVector: 1,
//             city: 1,
//             promotionsAndOffers: 1,
//             hotelTariff: 1
//         }
//     }]
//     ).exec().catch(err => {
//         // convert error to null result in resolved array
//         return null;
//     });
// })).then(fDatas => {
//     fDatas = fDatas.filter(data => data !== null
//     );
//     res.send({
//         status: true,
//         hotels: fDatas
//     });
// }).catch(err => {
//     // handle error here
// });