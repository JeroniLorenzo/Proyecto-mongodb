//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

//Importo el middleware de auth...
const auth = require('../middlewares/auth');

const MoviesController = require('../controllers/MoviesControllers');

//Endpoints

router.get("/", MoviesController.getAllMovies);
router.post("/", MoviesController.newMovie);
router.put("/", MoviesController.updateMovie);
router.delete("/", MoviesController.deleteMovie);


//Endpoints with middleware...
router.get("/profile/TopRated/:rating", auth, MoviesController.getMovieByRating);
router.get("/profile/:_id", auth, MoviesController.getMovieById);
router.get("/profile/tittle/:tittle", auth, MoviesController.getMovieByTittle);
router.get("/profile/genre/:name", auth, MoviesController.getMovieByGenre);


//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;