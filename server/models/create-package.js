var mongoose = require('mongoose')

var createPackageSchema = mongoose.Schema({
    fullname : {
        type : String , 
        required : true
    },
    email : {
        type : String ,
        required : true
    },
    mobile : {
        type : Number,
        required :true
    },
    arrDate : {
        type : String,
    },
    depDate : {
        type :String
    },
    visits : [{
        country : {
            type :String ,
        },
        city : {
            type : String
        },
        noOfAdults : {
            type : String
        },
        noOfChildrens : {
            type :String
        } 
    }]
})

var createPackage = module.exports = mongoose.model('create-package', createPackageSchema)

module.exports.get = function (callback , limit) {
    createPackage.find(callback).limit(limit)
}