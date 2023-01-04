//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

//Importo el middleware de auth...
const auth = require('../middlewares/auth');
// const isAdmin = require('../middlewares/isAdmin');

const MoviesController = require('../controllers/MoviesControllers');

//Endpoints

router.get("/getAll", MoviesController.getAllMovies);
router.post("/newMovie", MoviesController.newMovie);
router.put("/updateMovie", MoviesController.updateMovie);
router.delete("/deleteMovie", MoviesController.deleteMovie);


//Endpoints with middleware...
router.get("/profile/rating", auth, MoviesController.getMovieByRating);
router.get("/profile/id", auth, MoviesController.getMovieById);
router.get("/profile/tittle", auth, MoviesController.getMovieByTittle);
router.get("/profile/genre", auth, MoviesController.getMovieByGenre);
router.get("/profile/year", auth, MoviesController.getMovieByYear)

//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;