const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");

const port = process.env.PORT || 6000;
// const port = process.env.PORT || 5000; 

//connect to database
connectDB();

//setup middlewares
app.use(express.json());

app.listen(port,()=>console.log(`listening on on port ${port}`));