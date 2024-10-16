const Booking = require("../models/bookingModel");

const getBookings = async (req , res, next) => {
    try{
        const Bookings = await Booking.find().populate("roomId");
        if(!bookings) {
            res.status(400);
            throw new Error("cannot find bookings");
        }
        
        return res.status(200).json(bookings);
    }catch(error){
        next(error);
    }
};

const createBooking = async (req, res, next) =>{
    try{
        const booking = await Booking.create(req.body);
        if(!bookings){
            res.status(400);
            throw new Error("cannot create booking");
        }

        return res.status(201).json(booking);
    }catch(error) {
        next(error);
    }
};

const updateBooking = async(req, res, next) => {
    try{
        const updateBooking = await Booking.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.boyd,
            },
            {
                new: true,
            }
        );

        if((!updateBooking)){
            res.status(400);
            throw new Error("cannot create booking");
        }
        const bookings = await Booking.find();
        return res.status(200).json(bookings);
    }catch(error) {
        next(error);
    }
};

const deleteBooking = async (req, res, next) =>{
    try{
        const room = await Booking.findByIdAndDelete(req.params,id);
        if(!room){
            res.status(400);
            throw new Error("cannot delete room");
        }
        return res.status(200).json({ id: req.params.id});
    }catch(error){
        next(error);
    }
};

const getBooking = async(req, res, next) =>{
    try{
        const booking = await Booking.findById(req.params.id).populate("roomId");
        if(!booking) {
            res.status(400);
            throw new Error("Booking not found");
        }

        return res.status(200).json(booking);
    }catch(error){
        next(error);
    }
};

module.exports = {
    getBookings,
    createBooking,
    updateBooking,
    deleteBooking,
    getBooking,
};