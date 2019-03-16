updateThemeModel = require('../models/update-theme')
listThemeModel = require('../models/list-theme-model')
exports.update = function (req, res) {

    updateThemeModel.findById(req.params.id, function (err, updateTheme) {
        if (err)
            res.send(err);
        updateTheme.theme = req.body.theme
        updateTheme.value = req.body.value;


        updateTheme.save(function (err) {
            if (err)
                res.send(err);
            res.send({
                message: 'Theme updated',
                data: updateTheme
            });
        });
    });
};

exports.new = function (req, res) {
    var listTheme = new listThemeModel();
    listTheme.label = req.body.label;
    listTheme.value = req.body.value;

    listTheme.save(function (err) {
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
            data: listTheme
        });
    });
};

exports.getCurTheme =  function (req , res) {
    updateThemeModel.get(function (err, themes) {
        if (err) {
            res.send({
                status: "error",
                message: err,
            });
        }
        else
        res.send({
            status: "success",
            message: "Themes retrieved successfully",
            data: themes
        });
    });
}

exports.retrve = function (req, res) {

    listThemeModel.get(function (err, themes) {
        if (err) {
            res.send({
                status: "error",
                message: err,
            });
        }
        else
        res.send({
            status: "success",
            message: "Themes retrieved successfully",
            data: themes
        });
    });
}