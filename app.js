const express = require('express');
const exphbs= require('express-handlebars');
const bodyParser = require('body-parser')
const path = require('path');
const db = require('./config/database');
const gigs = require('./route/gigs');


const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/',(req,res)=> {
	res.send('index');
});

app.use('/gigs',gigs);


const PORT = process.env.PORT || 1337;
app.listen(PORT,console.log(`server started on port ${PORT}`));