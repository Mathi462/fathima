var mongoose = require('mongoose')

var RestaurantSchema = mongoose.Schema({
    name                    :  { type : String},
    restaurant_Catogery          :  { type : String},
    status                  :  { type : String},
    payment_Catogery        :  { type : String},
    address                 :  { type : String},
    location                :  { type : String},
    landmark                :  { type : String},
    city                    :  { type : String},
    State                   :  { type : String},
    Country                 :  { type : String},
    pincode                 :  { type : Number},
    salesContact            :  { type : String},
    salesContactNum         :  { type : String},
    sales_Email             :  { type : String},
    reservationContact      :  { type : String},
    reservationContactNum   :  { type : String},
    reservation_Email       :  { type : String},
    websites                :  { type : String},
    faxnumber               :  { type : String},
    meals_type:[],
    menu_type:[],
     
    
})

var restaurant = module.exports = mongoose.model('restaurant', RestaurantSchema)

module.exports.get = function (callback , limit) {
    restaurant.find(callback).limit(limit)
}