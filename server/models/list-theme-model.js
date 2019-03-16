var mongoose = require('mongoose')

var listThemeModel = new mongoose.Schema({
    label : {
        type : String,
        default :true
    },
    value : {
        required : true , 
        type : String
    }
})


var listTheme = module.exports = mongoose.model('list-theme',listThemeModel)

module.exports.get = function(callback , limit) {
    listTheme.find(callback).limit(limit)
}