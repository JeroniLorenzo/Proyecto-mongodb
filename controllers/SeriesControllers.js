const Serie = require('../models/serie');

const SeriesController = {};

SeriesController.getAllSeries = async (req, res) => {

    try {

        let result = await Serie.find({});

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Sorry, we didn't find any serie." })
        }

    } catch (error) {
        console.log(error);
    }
}

SeriesController.getSerieById = async (req, res) => {

    //Este id es el id que ha venido por parámetro en el endpoint (url)
    let _id = req.params._id;
    let serie = req.serie.serie[0];

    //Estos datos de movie son lo que el middleware auth ha decodificado del token ;)
    if (_id !== serie._id) {

        res.send({ "Msg": "Denied acces" });
    } else {

        res.send({

            "id": serie._id,
            "tittle": serie.tittle,
            "cast": serie.cast,
            "year": serie.year,
            "description": serie.description,

        });
    }
}

SeriesController.getSerieByTittle = async (req, res) => {

    let tittle = req.body.tittle;

    try {

        await Serie.find({
            tittle: tittle
        })
            .then(foundSeries => {
                res.send(foundSeries)
            })

    } catch (error) {
        console.log(error);
    }
}

SeriesController.getSerieByWeekly = async (req, res) => {

    let weekly = req.body.weekly;

    try {

        await Serie.find({
            weekly: weekly
        })
            .then(foundSeries => {
                res.send(foundSeries)
            })

    } catch (error) {
        console.log(error);
    }
}

SeriesController.getSerieByWeekly = async (req, res) => {

    let weekly = req.body.weekly;

    try {

        await Serie.find({
            weekly: weekly
        })
            .then(foundSeries => {
                res.send(foundSeries)
            })

    } catch (error) {
        console.log(error);
    }
}

SeriesController.getSerieByCinemaOrTheater = async (req, res) => {

    let cinemaOrTheater = req.body.cinemaOrTheater;

    try {

        await Serie.find({
            cinemaOrTheater: cinemaOrTheater
        })
            .then(foundSeries => {
                res.send(foundSeries)
            })

    } catch (error) {
        console.log(error);
    }
}

SeriesController.newSerie = async (req, res) => {

    try {

        let serie = await Serie.create({
            tittle: req.body.tittle,
            cast: req.body.cast,
            genre: req.body.genre,
            year: req.body.year,
            rating: req.body.rating,
            description: req.body.description
        })

        if (serie) {
            res.send({ "Message": `Serie: ${serie.name} has been added successfuly` })
        }

    } catch (error) {
        console.log(error)
    }

};

SeriesController.updateSerie = async (req, res) => {

    let _id = req.body._id;
    let newTittle = req.body.tittle;
    let newCast = req.body.cast;

    try {
        let updated = await Serie.findOneAndUpdate(
            //Query de búsqueda....
            { _id: _id },
            //Campos a cambiar
            {
                tittle: newTittle,
                cast: newCast
            }).setOptions({ returnDocument: 'after' })
        //con setOptions en este caso voy a exigir que me devuelva el documento modificado

        if (updated) {
            res.send(`The serie has been update successfuly`)
        }
    } catch (error) {
        console.log("Error updating serie data", error);
    }
}

SeriesController.deleteSerie = async (req, res) => {
    let _id = req.body._id;

    try {
        let deleted = await Serie.findOneAndDelete({
            _id: _id
        })

        if (deleted) {
            res.send({ "Message": `The serie: ${deleted.name} ${deleted.surname} has been successfuly deleted` })
        }
    } catch (error) {
        console.log("Error deleting serie", error);

    }
};

//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = SeriesController;