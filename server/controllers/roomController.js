const Room = require("../models/roomModel");

const getRooms = async (req, res) => {
    try{
        const rooms = await Room.find();

        if(!rooms){
            res.status(400);
            throw new Error("Room not found");
        }
        return res.status(200).json(rooms);
    }catch(error){
        next(error);
    }
};

const createRoom = async(req,res,next) => {
    try{
        //todo validate data froom user with joi
        const room = await Room.create(req.body);

        if(!room){
            res.status(400);
            throw new Error("There was a problem creating");
        }
        const rooms = await Room.find();
        return res.status(201).json(rooms);
    }catch(error){
        next(error);
    }
};

    //get single room
    const getRoom = async (req, res, next) =>{
        try{
            const room = await Room.findById(req.params.id);

            if(!rooms){
                res.status(400);
                throw new Error("room not found");
            }

            return res.status(200).json(room);
        }catch(error){
            next(error);
        }
    };

    const updateRoom = async(req, res, next) => {
        try{
            const updateRoom = await Room.findByIdAndUpdate(
                req.params.id,
                {
                    $set:req.body,
                },
                {new: true}

            )
        }catch(error){
            next(error);
        }
    };

    const deleteRoom = async (req, res)=>{
        try{
            const room = await Room.findByIdAndDelete(req.params.id);
            if(!room) {
                res.status(400);
                throw new Error("room not deleted");
            }

            return res.status(200).json({ id: req.params.id});
        }catch (error){
            next(error);
        }
    }

    module.export ={
        getRooms,
        createRoom,
        updateRoom,
        deleteRoom,
    };