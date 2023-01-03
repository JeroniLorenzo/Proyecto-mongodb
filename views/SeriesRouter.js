//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

//Importo el middleware de auth...
const auth = require('../middlewares/auth');

const SeriesController = require('../controllers/SeriesControllers');

//Endpoints

router.get("/", SeriesController.getAllSeries);
router.post("/", SeriesController.newSerie);
router.put("/", SeriesController.updateSerie);
router.delete("/", SeriesController.deleteSerie);


//Endpoints with middleware...
router.get("/profile/rating", auth, SeriesController.getSerieByRating);
router.get("/profile/id", auth, SeriesController.getSerieById);
router.get("/profile/tittle", auth, SeriesController.getSerieByTittle);
router.get("/profile/genre", auth, SeriesController.getSerieByGenre);
router.get("/profile/weekly", auth, SeriesController.getSerieByWeekly);
router.get("/profile/cinemas", auth, SeriesController.getSerieByCinemaOrTheater);

//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;