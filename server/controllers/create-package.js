createPackageModel = require('../models/create-package-model')

exports.new = function(req , res){
    var createPackage = new createPackageModel();
    createPackage.fullname = req.body.fullname;
    createPackage.email = req.body.email;
    createPackage.mobile = req.body.mobile;
    createPackage.visits = req.body.visits;


    createPackage.save(function(err){
        if (err) {
            res.send({
                status: "error",
                message: err,
            });
        }
        res.send({
            status: true,
            message: "Create Package inserted successfully",
            data: createPackage
        });
    });
};