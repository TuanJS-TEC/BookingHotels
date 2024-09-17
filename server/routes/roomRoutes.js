const { Router } = require ("express");

// const {
//     getRooms,
//     createRoom,
//     updateRooms,
//     deleteRoom,
// } = require("../controllers/roomController");
// const { auth } = require("../middleware/authMiddletware");

const router = Router();

router.get("/",getRooms);

// router.post("/",);

router.get("/",(req,res)=>{
    return res.json({mesage:"get room"});
})

module.exports = router;