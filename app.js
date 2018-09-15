const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const conn = require('./dbconnection/db');
const route = require('./routes/index');

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server up and running on port ${PORT}`)
});

app.use('/',route);


