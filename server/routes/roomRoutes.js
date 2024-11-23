const { Router } = require ("express");

const {
    getRooms,
    createRoom,
    updateRooms,
    deleteRoom,
} = require("../controllers/roomController");
const { auth } = require("../middleware/authMiddletware");

const router = Router();

//get all router
router.get("/",getRooms);

//create room
router.get("/",auth,createRoom);

//get single room
router.post("/",getRoom);

//update room
router.put("/:id", auth,updateRoom);

//delete room
router.delete(":/id",auth,deleteRoom);

module.exports = router;