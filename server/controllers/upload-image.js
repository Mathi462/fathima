uploadImageModel = require('../models/upload-image')

var fs = require('fs')

exports.new = function (req, res) {
    var uploadImage = new uploadImageModel();
    uploadImage.image =fs.readFileSync(req.body.image);
    uploadImage.contentType = "image/png"
    // updateTheme.isLightTheme = req.body.isLightTheme;

    uploadImage.save(function (err) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: true,
            message: "Create Package inserted successfully",
            data: uploadImage
        });
    });
};

exports.getAll = function(req , res) {
    var uploadImage = new uploadImageModel();

        uploadImageModel.find(function(err, doc) {
        if(err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: true,
            message: "Create Package inserted successfully",
            data: doc
        });
    });
};

