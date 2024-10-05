const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const roomRoutes = require("./routes/roomRoutes");
const path = require("path");
const userRouter = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
const { error } = require("console");

const port = process.env.PORT || 6000;


//connect to database
connectDB();

//setup middlewares
app.use(express.json());
app.use(cookieParser);

//set up routes
app.use("/api/rooms", roomRoutes);
app.use("/api/bookings",bookingRoutes);
app.use("/api/user",userRoutes);

//set up production
if (process.env.Node_ENV === "production"){
    const publicpath = path.join(__dirname,".","build");
    const filepath = path.resolve(__dirname,".","build","index.html");
    app.use(express.static(publicpath));

    app.get("*",(req,res) =>{
        return res.sendfile(filePath);
    });
}

app.use(errorHandler);

app.listen(port,()=>console.log(`listening on on port ${port}`));