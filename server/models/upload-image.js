var mongoose = require('mongoose')

var uploadImageSchema = new mongoose.Schema({
    image : {
        required :true , 
        type : Buffer
    },
    contentType : {
        required : true,
        type : String
    }
   
})


var uploadImage = module.exports = mongoose.model('images',uploadImageSchema)

module.exports.get = function(callback , limit) {
    uploadImage.find(callback).limit(limit)
}