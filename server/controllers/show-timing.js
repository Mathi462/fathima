ShowTimingModel = require('../models/showTimingDetails')

var ObjectId = require('mongodb').ObjectID;

exports.new = function (req, res, next) {
    console.log(req.body)
    let ShowTimingModels = new ShowTimingModel({
        showName    : req.body.showName,
        showTime    : req.body.showTime,
        pickUpTime  : req.body.pickUpTime,
        dropOffTime : req.body.dropOffTime,
    })

    ShowTimingModels.insertMany(function (err,data) {
        if (err) {
            res.send({
                status: "error",
                message: err,
            });
        }
        res.send({
            status: true,
            message: "Show Timing successfully",
            
        });
    });
}


// get all datas

exports.getAll = function (req, res,next)  {
    ShowTimingModels.find()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.send({
            status: "error",
            message: err,
        });
    });
}