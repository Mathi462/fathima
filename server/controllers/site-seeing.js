siteSeeingModel = require('../models/site-seeing-model')
ShowTimingModel = require('../models/showTimingDetails')


const googleMapsClient = require('@google/maps')

const util = require('util')

exports.new = function (req, res) {

   // console.log(req.body)
    ShowTimingModel.insertMany(req.body.showTimingDetails, function(err,data) {
       // console.log(err,data)
        var id_array = []
        data.forEach((element,array) =>{
            id_array.push(element._id) 
        })
        var siteSeeing = new siteSeeingModel({
            name                :req.body.name,
            paymentOption       :req.body.paymentOption,
            seasonPeriod        :req.body.seasonPeriod,
            guidePrice          :req.body.guidePrice,
            displayText         :req.body.displayText,
            address             :req.body.address,
            contact             :req.body.contact,
            showTimingDetails   :id_array,
            tariffDetails       :req.body.tariffDetails,
        });
        siteSeeing.save(function (err) {
            if (err) {
                res.send({
                    status: "error",
                    message: err,
                });
            }
            else
                res.send({
                    status: true,
                    message: "Create Package inserted successfully",
                    data: siteSeeing
                });
        });
    })


};

// exports.getAll = function (req, res) {
//     let data = req.params.data
//     console.log(data)
//     data = JSON.parse(data)
//     console.log(data)
//     let rsp = []
//     persons = 0;
//     persons = Number(data.noOfAdults) + Number(persons)
//     persons = Number(persons) + Number(data.noOfChildrens)
//     siteSeeingModel.find({
//         'address.city': data.city
//     }).then(d => {

//         Promise.all(d.filter((filter) => {
//             filter.roomsAvailableDetailsVector.filter((max, index) => {
//                 if (max.maxPersonsAllowed > !persons && max.maxPersonsAllowed < !persons + 1) {
//                     filter.roomsAvailableDetailsVector.splice(index, 1)
//                     console.log(persons, max.maxPersonsAllowed)
//                 }
//                 filter.seasonDetails.filter((season, index) => {

//                     if (new Date(data.arrDate) > new Date(season.startDate) && new Date(data.depDate) < new Date(season.endDate)) {

//                     }
//                     else {

//                         filter.seasonDetails.splice(index, 1)
//                     }

//                 })
//             })

//             filter.roomsAvailableDetailsVector.filter((ntAvail, index) => {
//                 console.log(ntAvail)
//                 ntAvail.notAvailableDates.filter((notAvailDts, idx) => {
//                     if (new Date(data.arrDate) <= new Date(notAvailDts) && new Date(data.depDate) >= new Date(notAvailDts)) {
//                         filter.roomsAvailableDetailsVector.splice(index, 1)
//                     }
//                     else {
//                     }
//                 })


//             })
//             filter.hotelTariff.fitandGroupHotelTariffVector.filter(fitGroup => {
//                 if (new Date(data.arrDate) > new Date(fitGroup.validityStartDate) && new Date(data.depDate) < new Date(fitGroup.validityEndDate)) {
//                     filter.seasonDetails.splice(index, 1)
//                 }
//                 else {
//                 }
//             })
//         }))
//         console.log(d)
//         res.send({
//             status: true,
//             site: d
//         })
//         // console.log(d)
//     }).catch(err => {
//         res.send({
//             status: false,
//             error: err
//         })
//     })
// }


// exports.showTiming = function (req, res) {
//     // var siteSeeingData = new siteSeeingModel({
//     //     city : 'Bangalore',
//     //     date : '2018-12-14'
//     // })

//     var date = "2018-12-14T09:07:07.000Z"
//     var date1 ="2018-12-13T09:07:07.000Z"
//     var date2 = "2018-12-12" 

//     console.log(req.body)
//     console.log(req.body.city)
//     console.log(new Date(req.body.showDate))
//     console.log(new Date(req.body.showDate).toDateString())
//     console.log(new Date(req.body.showDate).toISOString())
//     console.log(new Date(req.body.showDate).toString())
//     // siteSeeingModel.find({"address.city":req.body.city}).then(data =>{
//     //    res.send('hi')
//     // console.log(util.inspect(data, {showHidden: false, depth: null}))
//     //  }).catch(err =>{
//     //     res.send(err)
//     // })

//     // const findQuery = [
//     //     // {$unwind: "$showTimingDetails" },
//     //     {$match: {"showTimingDetails.showTime": {$gte: new Date(date2), $lte :new Date(date2) } } },
//     //     {$group: {_id: "$_id", showTimingDetails: {$push: "$showTimingDetails"} } }
//     // ];
    
//     // siteSeeingModel.aggregate(findQuery).then(data =>{
//     //     console.log(data)
//     //     res.send(data)
//     // }).catch(err => {
//     //     res.send(err)
//     // })
// }

// get all datas

exports.getAll = function (req, res,next)  {
    siteSeeingModel.find().populate('showTimingDetails')
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.send({
            status: "error",
            message: err,
        });
    });
}

exports.showTiming = function (req, res) {
    // console.log(req.body)
        siteSeeingModel.find({"address.city":req.body.city}).populate({
            path : "showTimingDetails",
            match : {
                "showTime":{
                   $gte: new Date(req.body.showDate), $lte :new Date(req.body.showDate) 
                }
            }
        })
        .then(data =>{
       res.send(data)
    // console.log(util.inspect(data, {showHidden: false, depth: null}))
     }).catch(err =>{
        res.send(err)
    })
}



exports.getAll = function (req, res) {
    let data = req.params.data
    // console.log(data)
    data = JSON.parse(data)
    // console.log(data)
    let rsp = []
    persons = 0;
    persons = Number(data.noOfAdults) + Number(persons)
    persons = Number(persons) + Number(data.noOfChildrens)
    siteSeeingModel.find({
        'address.city': data.city
    }
    ).then(d => {
       /* Promise.all(d.filter((filter) => {
            filter.roomsAvailableDetailsVector.filter((max, index) => {
                if (max.maxPersonsAllowed > !persons && max.maxPersonsAllowed < !persons + 1) {
                    filter.roomsAvailableDetailsVector.splice(index, 1)
                    console.log(persons, max.maxPersonsAllowed)
                }
                filter.seasonDetails.filter((season, index) => {

                    if (new Date(data.arrDate) > new Date(season.startDate) && new Date(data.depDate) < new Date(season.endDate)) {

                    }
                    else {

                        filter.seasonDetails.splice(index, 1)
                    }

                })
            })

            filter.roomsAvailableDetailsVector.filter((ntAvail, index) => {
                console.log(ntAvail)
                ntAvail.notAvailableDates.filter((notAvailDts, idx) => {
                    if (new Date(data.arrDate) <= new Date(notAvailDts) && new Date(data.depDate) >= new Date(notAvailDts)) {
                        filter.roomsAvailableDetailsVector.splice(index, 1)
                    }
                    else {
                    }
                })


            })
            filter.hotelTariff.fitandGroupHotelTariffVector.filter(fitGroup => {
                if (new Date(data.arrDate) > new Date(fitGroup.validityStartDate) && new Date(data.depDate) < new Date(fitGroup.validityEndDate)) {
                    filter.seasonDetails.splice(index, 1)
                }
                else {
                }
            })
        }))*/
      //  console.log(d)
        res.send({
            status: true,
            site: d
        })
        // console.log(d)
    }).catch(err => {
        res.send({
            status: false,
            error: err
        })
    })
}
