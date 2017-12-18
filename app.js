//Importing modules
var mongoose= require('mongoose');
var express=require('express');
var body_parser=require('body-parser');
var cors=require('cors');
var path=require('path');

var app=express();

const route=require('./routes/route');

//adding middleware -cors
app.use(cors());

//body parser
app.use(body_parser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/musiclist');

//on successful connection
mongoose.connection.on('connected', function () {
    console.log('connnected to database mongodb @27017 ');
});

//on connection failed
mongoose.connection.on('error', function (err) {
    if(err)
    {
     console.log('Error in database connection : '+err);
    }
    console.log('connnected to database mongodb @27017 ');
});


const port =3000;

app.use('/api',route);


//testing server
app.get('/',function(req , res) {
   res.send('IMRAN IS THE BEST');
});

app.listen(port,function()  {
    console.log('server started at port :'+port);
});