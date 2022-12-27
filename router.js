const router = require('express').Router();

const MoviesRouter = require('./views/MoviesRouter');
const UsersRouter = require('./views/UsersRouter');
const SeriesRouter = require('./views/SeriesRouter');

router.use("/movies", MoviesRouter);
router.use("/series", SeriesRouter);
router.use("/users", UsersRouter);


module.exports = router;