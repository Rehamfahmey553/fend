// Setup empty JS object to act as endpoint for all routes
projectData = {weather -app. map};

// Require Express to run server and routes
constexpress=require('express');
constapp=express();
//GET DATAF ROM SERVER ROUTE
// Start up an instance of app
app.get("/getdata,function(req,res){ });
        //postDATAto SERVER ROUTE
        app.post("/postdata",function(req,res){};
constport=6666;// CREATE SERVER.

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));

app.listen(port,()>{console.log('server is running on port ${port}')
// Setup Server
