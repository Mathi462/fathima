var mongoose = require('mongoose')

var createPackageSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    nationality : {
        type : String,
        required :true
    },
    visits: [{
        country: {
            type: String,
            required :true
        },
        city: {
            type: String,
            required :true
        },
        pincode : {
            type : Number,
            required :true
        },
        noOfAdults: {
            type: String,
            required :true
        },
        noOfChildrens: {
            type: String,
            required :true
        },
        arrDate: {
            type: Date,
            required :true
        },
        depDate: {
            type: Date,
            required :true
        }
    }]
})

var createPackage = module.exports = mongoose.model('create-package', createPackageSchema)

module.exports.get = function (callback, limit) {
    createPackage.find(callback).limit(limit)
}