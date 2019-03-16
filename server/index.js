let express = require('express')

let app = express()

let apiRoutes = require('./routes/routes')
var cors = require('cors')
app.use(cors())
var port = process.env.PORT || 9000

let bodyParser = require('body-parser')

let mongoose = require('mongoose')


app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/angular-travel',{ useNewUrlParser : true})
app.get('/', (req ,res) => res.send("Message"))

app.listen(port,function(){
    console.log("Running on port "+ port)
})

app.use('/angular-travel' , apiRoutes)

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
