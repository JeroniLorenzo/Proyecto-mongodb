//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

//Importo el middleware de auth...
const auth = require('../middlewares/auth');
// const isAdmin = require('../middlewares/isAdmin');

const SeriesController = require('../controllers/SeriesControllers');

//Endpoints

router.get("/getAll", SeriesController.getAllSeries);
router.post("/newSerie", SeriesController.newSerie);
router.put("/updateSerie", SeriesController.updateSerie);
router.delete("/deleteSerie", SeriesController.deleteSerie);


//Endpoints with middleware...
router.post("/rating", auth, SeriesController.postSerieByRating);
router.post("/id", auth, SeriesController.postSerieById);
router.get("/tittle/:tittle", auth, SeriesController.getSerieByTittle);
router.post("/genre", auth, SeriesController.postSerieByGenre);
router.post("/weekly", auth, SeriesController.postSerieByWeekly);
router.post("/cinemas", auth, SeriesController.postSerieByCinemaOrTheater);
router.post("/year", auth, SeriesController.postSerieByYear)
//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;