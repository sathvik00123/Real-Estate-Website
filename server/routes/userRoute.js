import express from 'express'
import { getAllBookings, bookVisit, createUser, cancelBooking, toFav, allFav } from '../controllers/userCntrl.js'
const router = express.Router();

router.post('/register',createUser);
router.post("/bookvisit/:id", bookVisit);
router.post("/allBookings", getAllBookings);
router.post("/removeBooking/:id", cancelBooking);
router.post("/addFav/:rid", toFav);
router.post("/allFav", allFav);

export { router as userRoute }



