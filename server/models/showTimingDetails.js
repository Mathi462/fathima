var mongoose = require('mongoose')

var ShowTimingSchema = mongoose.Schema({
    
    
    
        showName    : { type: String },
        showTime    : { type: Date   },
        pickUpTime  : { type: Date   },
        dropOffTime : { type: Date   }
    
    
})

var showTiming = module.exports = mongoose.model('show-timing', ShowTimingSchema)

module.exports.get = function (callback, limit) {
    showTiming.find(callback).limit(limit)
}