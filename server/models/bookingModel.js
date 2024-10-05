const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
    {
        roomId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Room",
        },
        name:{
            type:String,
            require:true,
        },
        checkInDate:{
            type:Date,
            require:true,
        },
        checkOutDate:{
            type:Date,
            require:true,
        },
        confirmed:{
            type:Boolean,
            default: false,
        },
    },
    {
        timestamps:true,
    }
);

module.export = mongoose.model("Booking",bookingSchema);