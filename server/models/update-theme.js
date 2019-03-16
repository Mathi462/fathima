var mongoose = require('mongoose')

var updateThemeScema = new mongoose.Schema({
    theme : {
        type : Boolean,
        default :true
    },
    value : {
        required : true , 
        type : String
    }
})


var updateTheme = module.exports = mongoose.model('update-theme',updateThemeScema)

module.exports.get = function(callback , limit) {
    updateTheme.find(callback).limit(limit)
}