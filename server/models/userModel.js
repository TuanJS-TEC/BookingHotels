const mongoose = require("mongoose")

const Userchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
    },
    password: {
        type: String,
        require:true
    },
    isAdmin:{
        type: Boolean,
        default: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model("Usesr",Userchema)