const express = require('express');

const app = express();

const PORT = 5500;

const dbconnect = require("./db/dbconnect");

const router = require('./router')

app.use(express.json());

app.use(router);


dbconnect();

app.listen(PORT, ()=> console.log(`Node server running on http://localhost:5500`))