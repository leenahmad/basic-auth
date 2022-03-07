'use strict';

const express = require('express');
const cors = require('cors')


const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');

const signup = require('./auth/middleware/singup')
const signin = require('./auth/middleware/basic')


const app = express();

app.use(express.json());

app.use(cors());


app.post('/signup' , signup);
app.post('/signin' , signin);




function start(port){
    
app.listen(port, () =>{
    console.log(`running on port ${port}`)
})

}

app.get('/' , (req,res) =>{
    res.send('home route')
})


app.use(errorHandler);
app.use('*',notFound);

module.exports = {
    app: app,
    start: start,
}