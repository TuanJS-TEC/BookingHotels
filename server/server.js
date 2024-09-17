const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const roomRoutes = require("./routes/roomRoutes");


const port = process.env.PORT || 6000;

//connect to database
connectDB();

//setup middlewares
app.use(express.json());
app.use(cookieParser);

//set up routes
app.use("/api/rooms", roomRoutes);

app.listen(port,()=>console.log(`listening on on port ${port}`));