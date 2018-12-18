const express = require('express');
const exphbs= require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/database');
const gigs = require('./route/gigs');

//Test DB
db
  .authenticate()
  .then(() => console.log('Database Connected . . . '))
  .catch(err => console.error('Error : ', err));

const app = express();

app.get('/',(req,res)=> {
	res.send('index');
});

app.use('/gigs',gigs);


const PORT = process.env.PORT || 1337;
app.listen(PORT,console.log(`server started on port ${PORT}`));