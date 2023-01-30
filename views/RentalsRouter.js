const express = require('express');

const router = express.Router();

 const auth = require('../middlewares/auth');
 const isAdmin = require('../middlewares/isAdmin');

const RentalsController = require('../controllers/RentalsController');


router.get("/getAll", auth, isAdmin, RentalsController.getAllRentals);

router.get("/userRentals/:id", auth, RentalsController.getUserRentals);

router.post("/newRental", auth, RentalsController.newRental);


module.exports = router;