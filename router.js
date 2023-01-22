const router = require('express').Router();

const MoviesRouter = require('./views/MoviesRouter');
const UsersRouter = require('./views/UsersRouter');
const SeriesRouter = require('./views/SeriesRouter');
const RentalsRouter = require('./views/RentalsRouter');

router.use("/movies", MoviesRouter);
router.use("/series", SeriesRouter);
router.use("/users", UsersRouter);
router.use("/rentals", RentalsRouter);


module.exports = router;