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
    let _id = req.body._id;

    try {

        await Serie.find({
            _id: _id

        })
            .then(foundSeries => {
                res.send(foundSeries)
            })

    } catch (error) {
        console.log(error);
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

SeriesController.getSerieByRating = async (req, res) => {

    let rating = req.body.rating;

    try {

        await Serie.find({
            rating: rating
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

SeriesController.getSerieByGenre = async (req, res) => {

    let genre = req.body.genre;

    try {

        await Serie.find({
            genre: genre
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
            description: req.body.description,
            next7DaysEpisode: req.body.next7DaysEpisode,
            cinemaOrTheater: req.body.cinemaOrTheater
        })

        if (serie) {
            res.send({ "Message": `Serie: ${serie.tittle} has been added successfuly` })
        }

    } catch (error) {
        console.log(error)
    }

};

SeriesController.updateSerie = async (req, res) => {

    let _id = req.body._id;
    let newTittle = req.body.tittle;
    let newCast = req.body.cast;
    let newGenre = req.body.genre;
    let newYear = req.body.year;
    let newRating = req.body.rating;
    let newNext7Days = req.body.next7Days;
    let newCinemaOrTheaters = req.body.cinemaOrTheater;

    try {
        let updated = await Serie.findOneAndUpdate(
            //Query de búsqueda....
            { _id: _id },
            //Campos a cambiar
            {
                tittle: newTittle,
                cast: newCast,
                genre: newGenre,
                year: newYear,
                rating: newRating,
                next7Days: newNext7Days,
                cinemaOrTheaters: newCinemaOrTheaters
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