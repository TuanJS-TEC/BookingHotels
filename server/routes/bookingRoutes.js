const { Router } = require("express");
const { auth }  = require("../middleware/authMiddleware");

const{
    getBooking,
    createBooking,
    updateBooking,
    deleteBooking,
    getBooking,
} = require("../controllers/bookingController");

const router = Router();

router.get("/", auth,getBooking);
router.get("/:id",getBooking);
router.post("/",createBooking);
router.put("/:id",auth,updateBooking);
router.delete(":/id", auth,deleteBooking);

module.exports = router;