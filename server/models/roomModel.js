const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    desc:{
        type: String,
        require:true,
    },
    img:{
        type:[String],
    },
    roomNumbers:{
        type:[
            {
                number:Number,
                unvailableDates:[Date],
            }
         ],
    },
});

module.export = mongoose.model("Room",roomSchema);

