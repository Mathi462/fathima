let router = require('express').Router();



router.get('/',function(req , res){
    res.json({
        status : 'Api is Working',
        message : 'Welcome to Angular - Traveller'
    })
})

var siteSeeingController = require('../controllers/site-seeing')

var createPackageController = require('../controllers/create-package')

var updateThemeController = require('../controllers/update-theme')

var uploadImageController = require('../controllers/upload-image')

var viewHotelController = require('../controllers/view-hotel')

var updateHotelController = require('../controllers/update-hotel')

var ShowTimingController = require('../controllers/show-timing')

var RestaurantController = require('../controllers/restaurant')

//create-package Routes
router.route('/create-package').post(createPackageController.new)

//update-theme Routes
router.route('/update-theme/:id').put(updateThemeController.update)
router.route('/update-theme').get(updateThemeController.retrve).post(updateThemeController.new)
router.route('/get-curr-theme').get(updateThemeController.getCurTheme)

//view-hotels
router.route('/view-hotel/:data').get(viewHotelController.getAll)
router.route('/post-hotel').post(viewHotelController.new)

//site-seeing
router.route('/post-site-seeing').post(siteSeeingController.new)
router.route('/get-site-seeing/:data').get(siteSeeingController.getAll)
// router.route('/get-site-seeing').get(siteSeeingController.getAll)

router.route('/display-show-timing').post(siteSeeingController.showTiming)

//Show timing
router.route('/post-show-timing').post(ShowTimingController.new)
router.route('/get-show-timing').get(ShowTimingController.getAll)


//Update-hotel
router.route('/post-update-hotel').post(updateHotelController.new)
router.route('/get-update-hotel').get(updateHotelController.getAll)
router.route('/view-update-hotel/:id').get(updateHotelController.getById)
router.route('/update-update-hotel/:id').put(updateHotelController.update)
router.route('/delete-update-hotel/:id').delete(updateHotelController.delete)

//restaurant
router.route('/post-restaurant').post(RestaurantController.new)
router.route('/get-food-details/:data').get(RestaurantController.getAll)
// router.route('/get-restaurant').get(RestaurantController.getAll)




router.route('/upload-image').post(uploadImageController.new).get(uploadImageController.getAll )

module.exports = router
