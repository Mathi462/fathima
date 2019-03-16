RestaurantModel = require('../models/restaurant')

var ObjectId = require('mongodb').ObjectID;






exports.new = function (req, res, next) {
    console.log(req.body.meals_details)
    let RestaurantModel1 = new RestaurantModel({
        name                        : req.body.name,
        hotel_Type                  : req.body.hotel_Type,
        hotel_Catogery              : req.body.hotel_Catogery,
        status                      : req.body.status,
        payment_Catogery            : req.body.payment_Catogery,
        address                     : req.body.address,
        location                    : req.body.location,
        landmark                    : req.body.landmark,
        city                        : req.body.city,
        State                       : req.body.State,
        Country                     : req.body.Country,
        pincode                     : req.body.pincode,
        salesContact                : req.body.salesContact,
        salesContactNum             : req.body.salesContactNum,
        sales_Email                 : req.body.sales_Email,
        reservationContact          : req.body.reservationContact,
        reservationContactNum       : req.body.reservationContactNum,
        reservation_Email           : req.body.reservation_Email,
        websites                    : req.body.websites,
        faxnumber                   : req.body.faxnumber,
        meals_type                  :req.body.meals_type,
        menu_type                   :req.body.menu_type
        
    })

    RestaurantModel1.save(function (err) {
        if (err) {
            res.send({
                status: "error",
                message: err,
            });
        }
        res.send({
            status: true,
            message: "Restaurant Updated successfully",
            // data: hotelModel
        });
    });
}

// // get all datas

// exports.getAll = function (req, res,next)  {
//     RestaurantModel.find()
//     .then(data => {
//         res.send(data);
//     }).catch(err => {
//         res.send({
//             status: "error",
//             message: err,
//         });
//     });
// }


exports.getAll = function (req, res) {
    let data = req.params.data
    console.log('------Data'+ data)
    data = JSON.parse(data)
    console.log('------Data------2'+ data)
      
    RestaurantModel.find({'city': data.city  }).then(d => {
       
        console.log(d)
        res.send({
            status: true,
            food: d
        })
        // console.log(d)
    }).catch(err => {
        res.send({
            status: false,
            error: err
        })
    })
}