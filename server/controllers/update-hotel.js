UpdateHotelModel = require('../models/update_hotel')

var ObjectId = require('mongodb').ObjectID;

exports.new = function (req, res, next) {
    console.log(req.body.meals_details)
    let UpdateHotelModel1 = new UpdateHotelModel({
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
        hotel_facilitys             : req.body.hotel_facilitys,
        room_availability_details   : req.body.room_availability_details,
        view_facilitys              : req.body.view_facilitys,
        in_room_facilitys           : req.body.in_room_facilitys,
        meeting_room_details        : req.body.meeting_room_details,
        tarif_details_FIT           : req.body.tarif_details_FIT,
        tarif_details_MICE          : req.body.tarif_details_MICE,
        policy_details              : req.body.policy_details,
        promotion_and_offers        : req.body.promotion_and_offers,
        event_and_season_details    : req.body.event_and_season_details,
        meals_details               : req.body.meals_details,
        
    })

    UpdateHotelModel1.save(function (err) {
        if (err) {
            res.send({
                status: "error",
                message: err,
            });
        }
        res.send({
            status: true,
            message: "Hotel Updated successfully",
            // data: hotelModel
        });
    });
}

// get all datas

exports.getAll = function (req, res,next)  {
    UpdateHotelModel.find()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.send({
            status: "error",
            message: err,
        });
    });
}

exports.getById = function (req, res,next)  {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        UpdateHotelModel.findById(req.params.id, (err, data) => {
        if (!err) 
        {
             res.send(data); 
        }
        else 
        {
            res.send({
                status: "error",
                message: err,
            });
        }
    });
}


exports.update = function (req, res, next) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        UpdateHotelModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, data) => {
        if (!err) {
            
            res.json({ message: data, status: 'successfully  Updated Hotel Details' });
        }
        else {

            res.json({ message: err, status: 'Failed to Update Hotel Details' });

        }
    });
}

exports.delete = function (req, res,next) {

    UpdateHotelModel.findByIdAndRemove(req.params.id)
     .then(UpdateHotelModel => {
         if(!UpdateHotelModel) {
             return res.status(404).send({
                 message: " Hotel not found with id " + req.params.id
             });
         }
         res.send({message: "Hotel deleted successfully!"});
     }).catch(err => {
         if(err.kind === 'ObjectId' || err.name === 'NotFound') {
             return res.send({
                 message: "Hotel not found with id " + req.params.id
             });
         }
         return res.status(500).send({
             message: "Could not delete Hotel with id " + req.params.id
         });
     });
  
  }



